const mongoose = require("mongoose");

const carSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: "category" },
  color: { type: String, required: true },
  make: { type: String, required: true },
  model: { type: String, required: true },
  registrationNo: { type: String, required: true },
  createdDate: { type: Date, default: new Date() },
});

module.exports = mongoose.model("car", carSchema);
