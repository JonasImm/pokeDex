import React, { useEffect } from "react";
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

function App() {
  const [pokemons, setPokemons] = React.useState(null);

  useEffect(() => {
    async function fetchData() {
      const pokedex = await fetchPokemon();
      setPokemons(pokedex);
    }
    fetchData();
  }, []);

  return (
    <div className="app">
      <header className="app__header">
        <h1>Pokedex</h1>
        <Input />
        {/* <button onClick={handleClick}>Get Pokemon</button> */}
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
  );
}

export default App;
