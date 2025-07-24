const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  role: {
    type: String,
    enum: ["employee", "admin"],
    default: "employee",
  },
});
module.exports = mongoose.model("User", userSchema);
