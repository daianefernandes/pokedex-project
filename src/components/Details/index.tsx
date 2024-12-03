import { IPokemon } from "../../interfaces/interface";
import { background } from "../../utils/colors";
import { Loader } from "../Loader";
import { BaseStats } from "./components/BaseStats";
import { Header } from "./components/Header";
import { PokemonTypes } from "./components/Types";
import { Title } from "./components/Title";

import { Bg, Info, LoadingContainer } from "./styles";
import React from "react";

interface Props {
  pokemon: IPokemon | null;
}

export const Details = ({ pokemon }: Props) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  if (!pokemon) {
    return (
      <LoadingContainer>
        <Loader size={50} color="fff" />
      </LoadingContainer>
    );
  }

  return (
    <Bg background={backgroundSelected}>
      <Header pokemon={pokemon} />
      <Info>
        <img
          src={
            pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default
          }
          alt={pokemon?.name}
        />
        <PokemonTypes pokemon={pokemon} />
        <Title content="Estatísticas" backgroundSelected={backgroundSelected} />
        <BaseStats pokemon={pokemon} backgroundSelected={backgroundSelected} />
      </Info>
    </Bg>
  );
};
