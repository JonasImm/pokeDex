import React from "react";
import "./listItem.css";

function ListItem({ href, children }) {
  return (
    <a className="pokedex__listItem" href={href}>
      {children}
    </a>
  );
}

export default ListItem;
