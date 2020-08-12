import React from "react";
import pickachuSrc from "../assets/pickachu_icon.svg";

function MenuItemPokemon({ children, href, alt }) {
  return (
    <a className="menuItem__pokemon" href={href} alt={alt}>
      <img src={pickachuSrc} alt="Pickachu Icon" />
      <span>Pokemon</span>
    </a>
  );
}

export default MenuItemPokemon;
