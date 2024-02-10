const router = require("express").Router();
const Korisnik = require("../model/Korisnik");
const bcrypt = require("bcrypt");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt(10);
    const hashedLozinka = await bcrypt.hash(req.body.lozinka, salt);

    const noviKorisnik = new Korisnik({
      korisnickoime: req.body.korisnickoime,
      email: req.body.email,
      lozinka: hashedLozinka,
    });

    const korisnik = await noviKorisnik.save();
    res.status(200).json(korisnik._id);
  } catch (greska) {
    res.status(500).json(greska);
  }
});

router.post("/login", async (req, res) => {
  try {
    const korisnik = await Korisnik.findOne({
      korisnickoime: req.body.korisnickoime,
    });

    !korisnik && res.status(400).json("Netacno koriscnicko ime ili sifra!");

    const validnaLozinka = await bcrypt.compare(
      req.body.lozinka,
      korisnik.lozinka
    );

    !validnaLozinka &&
      res.status(400).json("Netacno koriscnicko ime ili sifra!");

    res
      .status(200)
      .json({ _id: korisnik._id, korisnickoime: korisnik.korisnickoime });
  } catch (greska) {
    res.status(500).json(greska);
  }
});

module.exports = router;
