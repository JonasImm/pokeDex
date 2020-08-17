import React, { useState, useEffect } from "react";
import { fetchPokemon } from "../api/pokeApi";
import { useParams } from "react-router-dom";
import Loading from "../components/loading";

const Pokemon = () => {
  const { name } = useParams();
  const [pokemon, setPokemon] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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
    <div>
      <p>Pokemon: {pokemon.name}</p>
      <p>ID: {pokemon.id}</p>
      <p>
        Img: <img src={pokemon.imgSrc} alt={pokemon.name} />
      </p>
    </div>
  );
};

export default Pokemon;
