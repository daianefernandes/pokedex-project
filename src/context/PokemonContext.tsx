import React from "react";
import axios from "axios";
import { createContext, useEffect, useState } from "react";
import {
  AllPokemonsResult,
  PokemonsByTypeResult,
  PokemonType,
} from "../interfaces/types";

interface ContextProps {
  types: PokemonType[];
  filterSelected: PokemonType;
  pokemonsFiltered: string[] | null;
  changeTypeSelected: (type: PokemonType) => void;
}

export const PokemonContext = createContext<ContextProps>({} as ContextProps);

const PokemonProvider = ({ children }: any) => {
  const allPokemonsUrl = "https://pokeapi.co/api/v2/pokemon?limit=10000&offset=0";

  const defaultState: PokemonType = {
    name: "Todos",
    url: allPokemonsUrl,
  };

  const [allPokemons, setAllPokemons] = useState(null);
  const [pokemonsFiltered, setPokemonsFiltered] = useState(null);

  const [types, setTypes] = useState([defaultState]);
  const [filterSelected, setFilterSelected] = useState(defaultState);

  const changeTypeSelected = async (type: PokemonType) => {
    setFilterSelected(type);
  
    if (type?.url) {
      const { data } = await axios.get(type.url);
      const pokemons = data?.pokemon?.map(
        ({ pokemon }: PokemonsByTypeResult) => pokemon?.url
      );
  
      if (type.name !== "Todos") {
        setPokemonsFiltered(pokemons);
      } else {
        setPokemonsFiltered(allPokemons);
      }
    } else {
      console.error("URL do tipo não disponível.");
    }
  };  

  const getPokemonsType = async () => {
    const { data } = await axios.get("https://pokeapi.co/api/v2/type");
    setTypes([...types, ...data.results]);
  };

  const getAllPokemons = async () => {
    const { data } = await axios.get(allPokemonsUrl);

    const pokemons = data?.results?.map(
      (pokemon: AllPokemonsResult) => pokemon?.url
    );

    setAllPokemons(pokemons);
    setPokemonsFiltered(pokemons);
  };

  useEffect(() => {
    getPokemonsType();
    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{
        types,
        filterSelected,
        pokemonsFiltered,
        changeTypeSelected,
      }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;