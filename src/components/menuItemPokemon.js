import React from "react";
import pickachuSrc from "../assets/pickachu_icon.svg";

function MenuItemPokemon() {
  return (
    <div className="menuItem__pokemon">
      <img src={pickachuSrc} alt="Pickachu Icon" />
      <span>Pokemon</span>
    </div>
  );
}

export default MenuItemPokemon;
