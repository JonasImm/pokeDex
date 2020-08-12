import React from "react";
import "./App.css";
import List from "./components/list";
import ListItem from "./components/listItem";
import ListItemIcon from "./components/listItemIcon";
import ListItemText from "./components/listItemText";
import BulbasaurSrc from "./assets/bulbasaur.png";
import Input from "./components/input";

function App() {
  return (
    <div className="app">
      <header className="app__header">
        <h1>Pokedex</h1>
        <Input />
      </header>
      <main className="pokedex__main">
        <List>
          <ListItem href="#">
            <ListItemIcon src={BulbasaurSrc} alt="BulbasaurSrc" />
            <ListItemText primary="Bulbasaur" secondary="#001" />
            <ListItemIcon src={BulbasaurSrc} alt="BulbasaurSrc" />
          </ListItem>
        </List>
      </main>
      <footer className="app__footer">Navigation</footer>
    </div>
  );
}

export default App;
