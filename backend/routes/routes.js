const express = require("express");
const { userSignup } = require("../controllers/signup");
const { userLogin } = require("../controllers/login");
const {
  productUpload,
  getAllProducts,
  getSingleProduct,
} = require("../controllers/product");

const router = express.Router();

router.post("/signup", userSignup);

router.post("/login", userLogin);

router.post("/product", productUpload);

router.get("/products", getAllProducts);

router.get("/products/:productID", getSingleProduct);

module.exports = router;
