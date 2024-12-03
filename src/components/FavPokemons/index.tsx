import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FavoritesContainer, FavoriteCard } from './styles';
import { IPokemon } from "../../interfaces/interface";
import React from "react";

interface Props {
  pokemon: IPokemon | null;
}

export const FavPokemons = ({ pokemon } : Props) => {
  const [favorites, setFavorites] = useState<string[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setFavorites(storedFavorites);
  }, []);

  return (
    <FavoritesContainer>
      {favorites.length > 0 ? (
        favorites.map((id) => (
          <FavoriteCard key={id}>
            <Link to={`/${pokemon?.name}`} style={{ textDecoration: "none" }}>
              {`Pokemon ID: ${id}`}
            </Link>
          </FavoriteCard>
        ))
      ) : (
        <p>Nenhum Pokémon favoritado.</p>
      )}
    </FavoritesContainer>
  );
};
