var express = require("express");
var app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.listen(3000);
console.log(`Server listening on: `, `http://localhost:3000`);

module.exports = app;
