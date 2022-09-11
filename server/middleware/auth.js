const jwt = require("jsonwebtoken");
const User = require("../model/UserSchema");

const protected = async (req, res, next) => {
  let token;
  //   check if token is available
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decodedToken = jwt.verify(token, process.env.SECRET_KEY);
      req.user = await User.findById(decodedToken.id).select("-password");
      next();
    } catch (error) {
      console.log(error);
      res.status(401).json({ message: "Not Authorized" });
    }
  }

  if (!token) {
    res.status(401).json({ message: "No tokens found, not authorized" });
  }
};

module.exports = { protected };
