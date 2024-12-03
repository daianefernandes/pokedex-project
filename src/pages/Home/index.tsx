import { useContext } from "react";
import { Filters } from "../../components/Filters";
import { Pagination } from "../../components/Pagination";
import { PokemonList } from "../../components/List";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";

import {
  HomeContainer,
  Header,
  HeaderContent,
  HeaderTitle,
  FavoritesLink,
} from "./styles";
import React from "react";

export const Home = () => {
  const { pokemonsFiltered } = useContext(PokemonContext);
  const { page, nextPage, previousPage, backToHome } = usePagination();
  const perPage = 21;

  return (
    <HomeContainer>
      <Header>
        <HeaderContent onClick={backToHome}>
          <HeaderTitle>Pokédex</HeaderTitle>
        </HeaderContent>
      </Header>
      <Filters />
      <FavoritesLink to="/favorites">Ver Favoritos</FavoritesLink>
      <PokemonList
        page={page}
        perPage={perPage}
        pokemonsUrls={pokemonsFiltered}
      />
      <Pagination
        page={page}
        perPage={perPage}
        nextPage={nextPage}
        previousPage={previousPage}
        // eslint-disable-next-line @typescript-eslint/no-non-null-asserted-optional-chain
        maxItems={pokemonsFiltered?.length!}
      />
    </HomeContainer>
  );
};
