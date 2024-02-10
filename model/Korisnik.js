const mongoose = require("mongoose");

const KorisnikSchema = new mongoose.Schema(
  {
    korisnickoime: {
      type: String,
      required: true,
      min: 2,
      max: 20,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      max: 50,
      unique: true,
    },
    lozinka: {
      type: String,
      required: true,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Korisnik", KorisnikSchema);
