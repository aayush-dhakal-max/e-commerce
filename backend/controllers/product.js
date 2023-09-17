const { Product } = require("../models/productModel");

const productUpload = async (req, res) => {
  const { name, category, price, description, image } = req.body;
  if (name && category && price && description && image) {
    await Product.create({
      name,
      category,
      price,
      description,
      image,
    })
      .then((result) => {
        if (result) {
          return res.send({
            type: "success",
            message: "Your product has been successfully uploaded",
          });
        } else {
          return res.send({
            type: "error",
            message: "Failed to upload the product",
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }
};

const getAllProducts = async (req, res) => {
  try {
    if (req.query.prod != "") {
      const productName = req.query.prod;
      const products = await Product.find({
        name: new RegExp(productName, "i"),
      });
      return res.send(products);
    } else {
      const products = await Product.find({});
      return res.send(products);
    }
  } catch (error) {
    console.log(error);
  }
};

const getSingleProduct = async (req, res) => {
  try {
    const id = req.params.productID;
    const products = await Product.find({ _id: id });
    return res.send(products);
  } catch (error) {
    return res.json({ message: "wrong query" });
    console.log(error);
  }
};

module.exports = { productUpload, getAllProducts, getSingleProduct };
