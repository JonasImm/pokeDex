import React from "react";
import "./listItem.css";
import { Link } from "react-router-dom";

function ListItem({ href, children }) {
  return (
    <Link className="pokedex__listItem" to={href}>
      {children}
    </Link>
  );
}

export default ListItem;
