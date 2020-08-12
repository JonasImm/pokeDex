import React from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/listItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        Pokedex{" "}
        <input
          className="pokedex__searchBar"
          type="text"
          placeholder="Search"
        />
      </header>
      <main className="pokedex__main">
        <List>
          <ListItem href="#">
            <ListItemIcon src="" alt="Bulbasaur" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Navigation</footer>
    </div>
  );
}

export default App;
