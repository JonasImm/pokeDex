import React from "react";
import "./input.css";
import searchIconSrc from "../assets/search-24px.svg";

function Input({ children }) {
  return (
    <div className="pokedex__searchElement">
      <input className="pokedex__searchBar" placeholder="Search" type="texts" />
      <button>
        <img src={searchIconSrc} alt="Search Icon" />
      </button>
    </div>
  );
}

export default Input;
