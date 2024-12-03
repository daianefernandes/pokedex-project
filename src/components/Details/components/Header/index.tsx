import React from "react";
import { useNavigate } from "react-router-dom";
import { IPokemon } from "../../../../interfaces/interface";

import { 
    HeaderContainer,
    LeftSection,
    StyledArrowLeftIcon,
    PokemonName,
  } from "./styles";

interface Props {
  pokemon: IPokemon | null;
}

export const Header = ({ pokemon }: Props) => {
  const navigate = useNavigate();

  return (
    <HeaderContainer>
      <LeftSection>
        <StyledArrowLeftIcon onClick={() => navigate(-1)} />
        <PokemonName>{pokemon?.name}</PokemonName>
      </LeftSection>
    </HeaderContainer>
  );
};