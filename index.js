const express = require("express");
const app = express();
const port = 3001;

const version = 46;
app.get("/", (req, res) => {
  res.send(`Hello World! v${version}`);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port} version ${version}!`);
});
