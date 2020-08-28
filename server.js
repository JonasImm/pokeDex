require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const { MongoClient } = require("mongodb");
const { fetchPokemons } = require("./fetchPokemon");

const port = 3000;
const app = express();
app.use(bodyParser.json());

const client = new MongoClient(process.env.MONGO_URL, {
  useUnifiedTopology: true,
});

async function main() {
  await client.connect();
  const database = client.db(process.env.MONGO_DB_NAME);

  const pokemons = await fetchPokemons();
  console.log(pokemons);

  app.get("/", (request, response) => {
    response.send("Boom. Läuft");
  });

  app.listen(port, function () {
    console.log(`Nice. App is listening on http//:localhost:/${port}`);
  });
}

main();
