let express = require("express");
let UserRoute = express.Router();

let { registerNewUser, loginUser } = require("../controller/user.controller");

UserRoute.post("/register", registerNewUser);
UserRoute.post("/login", loginUser);

module.exports = {
  UserRoute,
};
