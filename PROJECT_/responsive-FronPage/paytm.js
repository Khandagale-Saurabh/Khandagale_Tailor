const express = require("express");

const https = require("https");
const qs = require("querystring");

const app = express();

const parseUrl = express.urlencoded({ extended: false });
const parseJson = express.json({ extended: false });

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});


app.listen(PORT, () => {
  console.log(`App is listening on Port ${PORT}`);
});