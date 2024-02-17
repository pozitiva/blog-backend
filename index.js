const express = require("express");
const mongoose = require("mongoose");
const app = express();
const pinRoute = require("./ruta/pinovi");
const korisnikRoute = require("./ruta/korisnici");

app.use(express.json());

mongoose
  .connect(
    "mongodb+srv://ivadjokovic2:iva@cluster0.7bdfht8.mongodb.net/?retryWrites=true&w=majority"
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
