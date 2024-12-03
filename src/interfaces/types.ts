import { PokeTypes } from "../utils/colors";

export type PokeType = {
  name: PokeTypes | "Todos";
  url?: string;
};

export type AllPokemonsResult = {
  name: string;
  url: string;
};

export type PokemonsByTypeResult = {
  pokemon: {
    name: string;
    url: string;
  };
};