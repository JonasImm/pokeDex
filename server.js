const express = require("express");
const app = express();
const { MongoClient } = require("mongodb");

const port = 3000;

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

app.get("/", (request, response) => {
  response.send("Boom. Läuft");
});

app.listen(port, function () {
  console.log(`Nice. App is listening on http//:localhost:/${port}`);
});
