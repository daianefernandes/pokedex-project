/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { IPokemon } from "../../../../interfaces/interface";
import { background } from "../../../../utils/colors";

import { TypesContainer, Type } from "./styles";

interface Props {
  pokemon: IPokemon | null;
}

export const PokemonTypes = ({ pokemon }: Props) => {
  return (
    <TypesContainer>
      {pokemon?.types.map(({ type: { name } }) => (
        <Type
          key={name}
          backgroundColor={background[name as keyof typeof background]}
        >
          {name}
        </Type>
      ))}
    </TypesContainer>
  );
};
