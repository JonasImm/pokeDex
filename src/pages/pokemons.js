import React, { useEffect, useState } from "react";
import "../App.css";
import List from "../components/list";
import ListItem from "../components/listItem";
import ListItemIcon from "../components/listItemIcon";
import ListItemText from "../components/listItemText";
import Input from "../components/input";
import { fetchPokemon } from "../api/pokeApi";
import Loading from "../components/loading";

function Pokemons() {
  const [loading, setLoading] = useState(false);
  const [pokemons, setPokemons] = useState(null);
  /*  const [query, setQuery] = useEffect(""); to be checked*/

  useEffect(() => {
    async function fetchData() {
      setLoading(false);
      const pokedex = await fetchPokemon();
      setPokemons(pokedex);
      setLoading(true);
    }
    fetchData();
  }, []);
  return loading === false ? (
    <Loading />
  ) : (
    <>
      <header className="app__header">
        <h1>Pokedex</h1>
        <Input
        /* value={query}
          onChange={(event) => setQuery(event.target.value)} */
        />
      </header>
      <main className="pokedex__main">
        <List>
          {pokemons?.map((pokemon) => {
            return (
              <ListItem href={pokemon.href} key={pokemon.id}>
                <ListItemIcon
                  src={pokemon.imgSrc}
                  alt={`Picture of ${pokemon.name}`}
                />
                <ListItemText
                  primary={pokemon.name}
                  secondary={`#${pokemon.id}`}
                />
              </ListItem>
            );
          })}
        </List>
      </main>
    </>
  );
}
export default Pokemons;
