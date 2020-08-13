import React, { useEffect, useState } from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/listItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";
import Input from "./components/input";
import MenuItemPokeMoves from "./components/menuItemPokeMoves";
import MenuItemPokemon from "./components/menuItemPokemon";
import MenuItemPokeItems from "./components/menuItemPokeItems";
import Menu from "./components/menu";
import { fetchPokemon } from "./api/pokeApi";
import Loading from "./components/loading";

function App() {
  const [loading, setLoading] = useState(true);
  const [pokemons, setPokemons] = React.useState(null);

  useEffect(() => {
    setTimeout(() => setLoading(false), 30000);
  });

  useEffect(() => {
    async function fetchData() {
      const pokedex = await fetchPokemon();
      setPokemons(pokedex);
    }
    fetchData();
  }, []);

  return (
    <>
      {loading === false ? (
        <div className="app">
          <header className="app__header">
            <h1>Pokedex</h1>
            <Input />
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
          <footer className="app__footer">
            <Menu>
              <MenuItemPokemon href="#" />
              <MenuItemPokeMoves href="#" />
              <MenuItemPokeItems href="#" />
            </Menu>
          </footer>
        </div>
      ) : (
        <Loading></Loading>
      )}
    </>
  );
}

export default App;
