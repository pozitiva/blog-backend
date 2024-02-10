const mongoose = require("mongoose");

const PinSchema = new mongoose.Schema(
  {
    korisnickoime: {
      type: String,
      required: true,
    },
    naslov: {
      type: String,
      required: true,
      min: 3,
    },
    opis: {
      type: String,
      required: true,
    },
    ocena: {
      type: Number,
      required: true,
      min: 0,
      max: 5,
    },
    sirina: {
      type: Number,
      required: true,
    },
    duzina: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Pin", PinSchema);
