const express = require("express");
const app = express();

const port = 3000;

app.listen(port, function () {
  console.log(`Nice. App is listening on http//:localhost:/${port}`);
});
