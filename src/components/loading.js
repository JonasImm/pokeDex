import React from "react";
import "./loading.css";
import pokeballSrc from "../assets/pokeball.png";

function Loading() {
  return (
    <div className="loadingScreen">
      <img src={pokeballSrc} alt="Pokeball" />
      <span>Loading...</span>
    </div>
  );
}
export default Loading;
