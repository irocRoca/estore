const mongoose = require("mongoose");
const { isEmail } = require("validator");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const SALT_ROUNDS = 6;

const userSchema = new mongoose.Schema(
  {
    name: { type: String, trim: true, required: [true, "Name is required"] },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
      lowercase: true,
      trim: true,
      validate: [isEmail, "Enter a valid email"],
    },
    password: {
      type: String,
      required: [true, "Password is required"],
      trim: true,
      minlength: [3, "Min length is 3"],
    },
  },
  {
    toJSON: {
      transform: function (doc, ret) {
        delete ret.password;
        return ret;
      },
    },
  }
);

userSchema.pre("save", function (next) {
  const user = this;
  if (!user.isModified("password")) return next();

  bcrypt.hash(user.password, SALT_ROUNDS, function (err, hash) {
    if (err) return next(err);
    user.password = hash;
    return next();
  });
});

userSchema.methods.createJWT = function () {
  return jwt.sign({ id: this._id, name: this.name }, process.env.SECRET_KEY, {
    expiresIn: "24h",
  });
};

userSchema.statics.login = async function (email, pass) {
  const user = await this.findOne({ email });
  if (!user) throw Error("Invalid Credentials");
  const match = await bcrypt.compare(pass, user.password);
  if (match) return user;
  throw Error("Invalid Credentials");
};

module.exports = mongoose.model("user", userSchema);
