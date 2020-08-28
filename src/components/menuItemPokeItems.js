import React from "react";
import itemSrc from "../assets/item_icon.svg";

function MenuItemPokeItems() {
  return (
    <div className="menuItem__pokeItems">
      <img src={itemSrc} alt="Item Icon" />
      <span>Items</span>
    </div>
  );
}

export default MenuItemPokeItems;
