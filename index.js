const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.get("/", (req, res) => {
  res.send("Welcome to GlobalNexus !");
});

app.listen(port, () => {
  console.log(`GlobalNexus app listening on port ${port}`);
});
