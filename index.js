const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send({ bye: "buddy" });
});

app.get("/about", (req, res) => {
  res.send({ name: "Mojo Jojo", age: 21 });
});

app.listen(5000, () => {
  console.log("connected to server");
});
