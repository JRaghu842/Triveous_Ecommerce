let express = require("express");
let UserRoute = express.Router();

let jwt = require("jsonwebtoken");
let bcrypt = require("bcrypt");
require("dotenv").config();

let { UserModel } = require("../models/user.model");

UserRoute.post("/register", async (req, res) => {
  try {
    let { username, email, password } = req.body;
    let isUserPresent = await UserModel.findOne({ email });

    if (!username || !email || !password) {
      return res.status(400).send({ msg: "All fields are required to fill" });
    }

    if (isUserPresent) {
      return res.status(400).send({
        msg: "Email already taken, use another email OR just login with this email",
      });
    }

    let hashedPassword = bcrypt.hashSync(password, 5);

    let newUser = new UserModel({
      email: email,
      username: username,
      password: hashedPassword,
    });

    await newUser.save();

    res.status(200).send({ msg: "Registration successful" });
  } catch (error) {
    res.status(500).send({ msg: "Registration failed", error: error.message });
  }
});

UserRoute.post("/login", async (req, res) => {
  try {
    let { email, password } = req.body;
    let isUserRegisterd = await UserModel.findOne({ email });

    if (!isUserRegisterd) {
      res.status(400).send({ msg: "Not an existing user, please register" });
    }

    let isPasswordCorrect = bcrypt.compareSync(
      password,
      isUserRegisterd.password
    );

    if (!isPasswordCorrect) {
      res.status(400).send({ msg: "Wrong Credentials" });
    }

    let accessToken = jwt.sign(
      { userId: isUserRegisterd._id },
      process.env.JWT_ACCESS_TOKEN_KEY
    );

    res.status(200).send({ msg: "Login successful", accessToken });
  } catch (error) {
    res.status(400).send({ msg: "Login Failed!", error: error.message });
  }
});

module.exports = {
  UserRoute,
};
