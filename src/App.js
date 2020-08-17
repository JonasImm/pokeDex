import React from "react";
import "./App.css";
import MenuItemPokeMoves from "./components/menuItemPokeMoves";
import MenuItemPokemon from "./components/menuItemPokemon";
import MenuItemPokeItems from "./components/menuItemPokeItems";
import Menu from "./components/menu";
import { Switch, Router, Link, Route } from "react-router-dom";
import Pokemons from "./pages/pokemons";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>
        </Switch>
        <Switch>
          <Route path="/moves">
            <Pokemons />
          </Route>
        </Switch>
        <Switch>
          <Route path="/items">
            <Pokemons />
          </Route>
        </Switch>
        <footer className="app__footer">
          <Menu>
            <Link to="/pokemons">
              <MenuItemPokemon />
            </Link>
            <Link to="/moves">
              <MenuItemPokeMoves />
            </Link>
            <Link to="/items">
              <MenuItemPokeItems />
            </Link>
          </Menu>
        </footer>
      </div>
    </Router>
  );
}

export default App;
