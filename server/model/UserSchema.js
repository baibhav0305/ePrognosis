const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name !"],
    },
    email: {
      type: String,
      required: [true, "Please enter your email !"],
    },
    password: {
      type: String,
      required: [true, "Please enter a valid password !"],
    },
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model("USER", userSchema);

module.exports = User;
