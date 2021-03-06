const User = require("../model/user");
const { equals } = require("validator");
const jwt = require("jsonwebtoken");
const { loginValidate, registerValidate } = require("../src/helper/validation");

module.exports.signUp = async (req, res) => {
  const { email, name, password, confirmPassword } = req.body;
  const valid = registerValidate(req.body);
  if (valid.error) return res.json(valid);
  try {
    const user = await User.create({ email, name, password });
    const token = user.createJWT();
    res.cookie("token", token, { httpOnly: true, sameSite: "Lax" });
    // Figure out what to send to user
    return res.status(200).json(user);
  } catch (err) {
    const errors = handleErrors(err);
    if (errors) return res.json(errors);
    return res.status(500).json(err);
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;
  const valid = loginValidate(req.body);
  if (valid.error) return res.json(valid);
  // Check for blank fields
  try {
    const user = await User.login(email, password);
    const token = user.createJWT();
    res.cookie("token", token, { httpOnly: true });
    // Figure out what to send to user
    return res.status(200).json({ id: user._id, name: user.name });
  } catch (err) {
    const errors = handleErrors(err);
    if (errors) return res.json(errors);
    return res.status(500).json(err);
  }
};

module.exports.logout = (req, res) => {
  res.clearCookie("token");
  return res.status(200).json({ message: "Successfully logged out" });
};

module.exports.checkAuth = (req, res) => {
  const token = req.cookies.token;
  if (!token) return res.status(200).send(null);

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      res.clearCookie("token");
      return res.status(400).send(err.message);
    }
    return res.status(200).json({ id: decoded.id, name: decoded.name });
  });
};

/// Helper Functions /////

function handleErrors(err) {
  const errors = { error: false };

  if (err.code === 11000) {
    errors["email"] = "Email already registered";
    errors["error"] = true;
    return errors;
  }

  console.debug(err.message, "MESSAGE ");
  if (err.message.includes("Invalid Credentials")) {
    errors["message"] = err.message;
    errors["error"] = true;
  }

  if (err.message.includes("user validation failed")) {
    Object.values(err.errors).forEach(({ properties }) => {
      errors[properties.path] = properties.message;
    });
    errors["error"] = true;
  }
  return Object.values(errors).length > 1 ? errors : err.message;
}
