const router = require("express").Router();
const Pin = require("../model/Pin");

router.post("/", async (req, res) => {
  const noviPin = new Pin(req.body);

  try {
    const sacuvanPin = await noviPin.save();
    res.status(200).json(sacuvanPin);
  } catch (greska) {
    res.status(500).json(greska);
  }
});

router.get("/", async (req, res) => {
  try {
    const pinovi = await Pin.find();
    res.status(200).json(pinovi);
  } catch (greska) {
    res.status(500).json(greska);
  }
});

module.exports = router;
