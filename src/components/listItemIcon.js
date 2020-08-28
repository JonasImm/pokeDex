import React from "react";
import "./listItemIcon.css";

function ListItemIcon({ src, alt }) {
  return <img className="pokedex__img" src={src} alt={alt} />;
}

export default ListItemIcon;
