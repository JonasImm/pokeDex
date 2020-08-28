import React from "react";
import pokeballSrc from "../assets/pokeball_icon.svg";

function MenuItemPokeMoves() {
  return (
    <div className="menuItem__pokeMoves">
      <img src={pokeballSrc} alt="Pickachu Icon" />
      <span>Moves</span>
    </div>
  );
}

export default MenuItemPokeMoves;
