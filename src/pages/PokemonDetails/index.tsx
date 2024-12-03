import React from "react";
import { useParams } from "react-router-dom";
import { Details } from "../../components/Details";
import { usePokemon } from "../../hooks/usePokemon";

export const PokemonDetails = () => {
  const { pokeId } = useParams();
  const { pokemon } = usePokemon("", pokeId);

  return <Details pokemon={pokemon!} />;
};