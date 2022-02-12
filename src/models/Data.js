const mongoose = require("mongoose");

const DevSchema = new mongoose.Schema({
  name: String,
});

module.exports = mongoose.model("data", DevSchema);
