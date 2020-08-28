import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../api/pokeApi";
import { useParams, useHistory } from "react-router-dom";
import Loading from "../components/loading";
import closeSrc from "../assets/close.svg";
import "./pokemon.css";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const history = useHistory();

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError(null);
        const fetchedPokemon = await fetchPokemon(name);
        setPokemon(fetchedPokemon);
        setLoading(false);
      } catch (error) {
        console.error(error);
        setError(error);
      }
    }
    fetchData();
  }, [name]);

  if (error) {
    return <div>ERROR!!!</div>;
  }
  if (loading || !pokemon) {
    return <Loading />;
  }
  return (
    <>
      <body className="pokemon">
        <header className="pokemon__header">
          <button onClick={() => history.goBack()}>
            <img src={closeSrc} alt="Close" />
          </button>
          <h2>Pokemon: {pokemon.name}</h2>
        </header>
        <div className="pokemon__info">
          <span>
            <img src={pokemon.imgSrc} alt={pokemon.name} />
          </span>
          <p>ID: {pokemon.id}</p>
        </div>
      </body>
    </>
  );
};

export default Pokemon;
