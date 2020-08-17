import React from "react";
import "./App.css";
import MenuItemPokeMoves from "./components/menuItemPokeMoves";
import MenuItemPokemon from "./components/menuItemPokemon";
import MenuItemPokeItems from "./components/menuItemPokeItems";
import Menu from "./components/menu";
import { Switch, BrowserRouter as Router, Link, Route } from "react-router-dom";
import Pokemons from "./pages/pokemons";
import Moves from "./pages/moves";
import Items from "./pages/items";

function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/pokemons">
            <Pokemons />
          </Route>

          <Route path="/moves">
            <Moves />
          </Route>

          <Route path="/items">
            <Items />
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
