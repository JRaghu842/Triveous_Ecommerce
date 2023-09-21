let jwt = require("jsonwebtoken");

let authMiddleWare = async (req, res, next) => {
  try {
    let token = req.headers.authorization;

    if (!token) {
      return res
        .status(401)
        .send({ msg: "Token not found, please login first" });
    }
    let decodedToken = jwt.verify(token, process.env.JWT_ACCESS_TOKEN_KEY);

    req.user_data = { userId: decodedToken.userId };
    next();
  } catch (error) {
    res
      .status(401)
      .send({ msg: "Authentication failed", error: error.message });
  }
};

module.exports = {
  authMiddleWare,
};
