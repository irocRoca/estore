const jwt = require("jsonwebtoken");

module.exports.verifyAuth = (req, res, next) => {
  const token = req.cookies.token;

  if (!token) return res.status(401).send("Access Denied");

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.clearCookie("token");
      return res.status(400).send(err.message);
    }
    req.user = decoded;
    next();
  });
};
