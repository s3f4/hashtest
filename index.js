const express = require("express");
const app = express();
const port = 3001;

app.get("/", (req, res) => {
  res.send("Hello World! v2-main4");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
