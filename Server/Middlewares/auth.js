const jwt = require("jsonwebtoken");
const auth = function (req, res, next) {
  const token = req.header("x-auth-header");
  if (!token) {
    return res.status(401).json({ msg: "no token, authorization denied" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded.user;
    next();
  } catch (error) {
    res.status(401).json({ msg: "UnAuthorized user." });
  }
};

module.exports = auth;
