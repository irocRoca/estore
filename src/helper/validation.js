const validator = require("validator");

module.exports.loginValidate = (data) => {
  let errors = {};
  let { email, password } = data;

  //Email
  if (validator.isEmpty(email)) {
    errors.email = "Field is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password
  if (validator.isEmpty(password)) {
    errors.password = "Field is required";
  } else if (!validator.isLength(password, { min: 6 })) {
    errors.password = "Password must be greater than 6 characters";
  }

  return {
    ...errors,
    error: Object.keys(errors).length === 0 ? false : true,
  };
};

module.exports.registerValidate = (data) => {
  let errors = {};
  let { name, email, password, confirmPassword } = data;

  // Name check
  if (validator.isEmpty(name)) {
    errors.name = "Name is required";
  } else if (!validator.isLength(name, { min: 3 })) {
    errors.name = "Mame must be atleast 3 charcters";
  }

  //Email
  if (validator.isEmpty(email)) {
    errors.email = "Email is required";
  } else if (!validator.isEmail(email)) {
    errors.email = "Email is invalid";
  }

  //Password
  if (validator.isEmpty(password)) {
    errors.password = "Password is required";
  } else if (!validator.isLength(password, { min: 6 })) {
    errors.password = "Password must be greater than 6 characters";
  } else if (!validator.equals(password, confirmPassword)) {
    errors.password = "Passwords must match";
  }

  return {
    ...errors,
    error: Object.keys(errors).length === 0 ? false : true,
  };
};
