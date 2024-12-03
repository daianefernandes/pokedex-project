import { useEffect, useState } from "react";
import { Card } from "../../components/Card";
import { PokemonContainer } from "../../components/List/styles";
import { FavoritesTitle, Header } from "./styles";
import React from "react";

export const FavoritesPage = () => {
  const [favoritePokemons, setFavoritePokemons] = useState<string[]>([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (favorites.length > 0) {
      const urls = favorites.map(
        (id: number) => `https://pokeapi.co/api/v2/pokemon/${id}`
      );
      setFavoritePokemons(urls);
    }
  }, []);

  return (  
    <div>
      <Header>
        <FavoritesTitle>Meus Pokémons Favoritos</FavoritesTitle>
      </Header>
      {favoritePokemons.length > 0 ? (
        <PokemonContainer>
          {favoritePokemons.map((url) => (
            <Card key={url} url={url} />
          ))}
        </PokemonContainer>
      ) : (
        <p>Nenhum Pokémon favoritado ainda.</p>
      )}
    </div>
  );
};
