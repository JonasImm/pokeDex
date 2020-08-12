import React from "react";
import itemSrc from "../assets/item_icon.svg";

function MenuItemPokeItems({ children, href, alt }) {
  return (
    <a className="menuItem__pokeItems" href={href} alt={alt}>
      <img src={itemSrc} alt="Item Icon" />
      <span>Items</span>
    </a>
  );
}

export default MenuItemPokeItems;
