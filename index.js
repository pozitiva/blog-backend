const express = require("express");
const mongoose = require("mongoose");
const app = express();
const pinRoute = require("./ruta/pinovi");
const korisnikRoute = require("./ruta/korisnici");

app.use(express.json());

mongoose
  .connect(
    'mongodb://mongodb:27017/travels'
  )
  .then(() => {
    console.log("Povezan sa bazom");
  })
  .catch((err) => console.log(err));

app.use("/api/pins", pinRoute);
app.use("/api/users", korisnikRoute);

app.listen(8800, () => {
  console.log("Server osluskuje");
});
