const { User } = require("../models/userModel");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  await User.findOne({ email: email, password: password })
    .then((result) => {
      if (result) {
        const { firstname, lastname, email, image, _id } = result;
        const data = {
          _id,
          firstname,
          lastname,
          email,
          image,
        };
        return res.send({
          userInfo: data,
          message: `Welcome back!`,
          type: "success",
        });
      } else {
        return res.send({
          message: `Incorrect Username or Password! \n Try Again`,
          type: "error",
        });
      }
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { userLogin };
