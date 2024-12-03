import React from "react";
import { IPokemon } from "../../../../interfaces/interface";
import {
  StatsContainer,
  StatItem,
  StatLabel,
  StatRight,
  StatValue,
  StatBarContainer,
  StatBarBackground,
  StatBar,
} from "./styles";

interface Props {
  pokemon: IPokemon | null;
  backgroundSelected: string;
}

export const BaseStats = ({ pokemon, backgroundSelected }: Props) => {
  const maxStat = 255;

  const baseStatsNames = {
    hp: "hp",
    attack: "ataque",
    defense: "defensa",
    "special-attack": "ataque especial",
    "special-defense": "defesa especial",
    speed: "agilidade",
  };

  return (
    <StatsContainer>
      {pokemon?.stats?.map(({ base_stat, stat: { name } }) => {
        return (
          <StatItem key={name}>
            <StatLabel backgroundSelected={backgroundSelected}>
              {(baseStatsNames as any)[name]}
            </StatLabel>
            <StatRight>
              <StatValue>0{base_stat}</StatValue>
              <StatBarContainer>
                <StatBarBackground backgroundSelected={backgroundSelected} />
                <StatBar
                  backgroundSelected={backgroundSelected}
                  widthPercentage={`${(base_stat / maxStat) * 100}%`}
                />
              </StatBarContainer>
            </StatRight>
          </StatItem>
        );
      })}
    </StatsContainer>
  );
};
