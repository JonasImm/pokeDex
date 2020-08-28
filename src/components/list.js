import React from "react";
import "./list.css";

function List({ children }) {
  return <nav className="pokedex__list">{children}</nav>;
}

export default List;
