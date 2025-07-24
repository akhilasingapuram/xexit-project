const mongoose = require("mongoose");

const resignationSchema = new mongoose.Schema({
  employeeId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  lwd: String,
  status: {
    type: String,
    default: "pending",
  }, // or approved/rejected
});
module.exports = mongoose.model("Resignation", resignationSchema);
