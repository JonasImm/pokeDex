import React from "react";
import "./App.css";

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
      <main className="pokedex__main">Pokemons</main>
      <footer className="app__footer">Navigation</footer>
    </div>
  );
}

export default App;
