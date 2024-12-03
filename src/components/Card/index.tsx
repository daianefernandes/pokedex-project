/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useEffect, useState } from "react";
import { usePokemon } from "../../hooks/usePokemon";
import { background } from "../../utils/colors";
import { Link } from "react-router-dom";
import { Loader } from "../Loader";
import { faHeart as faHeartRegular } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faHeartSolid } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  CardContainer,
  Top,
  LoadingContainer,
  Bottom,
  PokemonCard,
} from "./styles";

interface Props {
  url: string;
}

export const Card = ({ url }: Props) => {
  const { pokemon } = usePokemon(url);
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (pokemon?.id) {
      const currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(currentFavorites.includes(String(pokemon.id)));
    }
  }, [pokemon?.id]);

  const toggleFavorite = () => {
    if (!pokemon?.id) return;

    const currentFavorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    if (isFavorite) {
      const updatedFavorites = currentFavorites.filter(
        (fav: string) => fav !== String(pokemon.id)
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
    } else {
      currentFavorites.push(String(pokemon.id));
      localStorage.setItem("favorites", JSON.stringify(currentFavorites));
    }
    setIsFavorite(!isFavorite);
  };

  /* @ts-ignore */
  const backgroundSelected = background[pokemon?.types[0]?.type?.name];

  return (
    <PokemonCard>
      <Link to={`/${pokemon?.id}`} style={{ textDecoration: "none" }}>
        <CardContainer>
          <Top borderColor={backgroundSelected}>
          <FontAwesomeIcon
              icon={isFavorite ? faHeartSolid : faHeartRegular}
              style={{ cursor: "pointer", color: isFavorite ? "red" : "gray" }}
              onClick={(e) => {
                e.preventDefault();
                toggleFavorite();
              }}
            />
            {pokemon?.sprites?.other?.dream_world?.front_default ||
            pokemon?.sprites?.front_default ? (
              <img
                src={
                  pokemon?.sprites?.other?.dream_world?.front_default ||
                  pokemon?.sprites?.front_default
                }
                alt={pokemon?.name}
              />
            ) : (
              <LoadingContainer>
                <Loader color={backgroundSelected} />
              </LoadingContainer>
            )}
          </Top>
          <Bottom background={backgroundSelected}>{pokemon?.name}</Bottom>
        </CardContainer>
      </Link>
    </PokemonCard>
  );
};
