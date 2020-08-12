import React from "react";
import pokeballSrc from "../assets/pokeball_icon.svg";

function MenuItemPokeMoves({ children, href, alt }) {
  return (
    <a className="menuItem__pokeMoves" href={href} alt={alt}>
      <img src={pokeballSrc} alt="Pickachu Icon" />
      <span>Moves</span>
    </a>
  );
}

export default MenuItemPokeMoves;
