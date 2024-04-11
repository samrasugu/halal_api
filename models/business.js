const mongoose = require("mongoose");

const businessSchema = new mongoose.Schema(
  {
    businessName: {
      type: String,
      required: true,
      unique: true,
    },
    businessEmail: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    businessPhone: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Business = mongoose.model("Business", businessSchema);
module.exports = {Business, businessSchema};
