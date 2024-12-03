import React from "react";
import { Card } from "../Card";

import { PokemonContainer } from "./styles";

interface Props {
  pokemonsUrls?: string[] | null;
  page: number;
  perPage: number;
}

export const PokemonList = ({ pokemonsUrls, page, perPage }: Props) => {
  return (
    <PokemonContainer>
      {pokemonsUrls
        ?.slice((page - 1) * perPage, (page - 1) * perPage + perPage)
        .map((pokemonUrl) => (
          <Card key={pokemonUrl} url={pokemonUrl} />
        ))}
    </PokemonContainer>
  );
};