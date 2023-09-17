const { User } = require("../models/userModel");

const userSignup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (firstname && lastname && email && password) {
    try {
      const checkUserExist = await User.findOne({ email: email });
      if (checkUserExist) {
        return res.send({
          message: "The user with this email already exists",
          type: "error",
        });
      } else {
        await User.create({
          firstname: firstname,
          lastname: lastname,
          email: email,
          password: password,
          image: req.body.image ? req.body.image : "",
        })
          .then((result) => {
            return res.send({
              type: "success",
              message: "User Successfully Created, Now Login !",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    } catch (error) {
      console.log(error);
    }
  }
};

module.exports = { userSignup };
