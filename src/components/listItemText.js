import React from "react";
import "./listItemText.css";

function ListItemText({ primary, secondary }) {
  return (
    <div className="pokedex__listItemText">
      <span>{primary}</span>
      <small>{secondary}</small>
    </div>
  );
}

export default ListItemText;
