/* eslint-disable @typescript-eslint/ban-ts-comment */
import React from "react";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { PokemonContext } from "../../context/PokemonContext";
import { usePagination } from "../../hooks/usePagination";
import { PokemonType } from "../../interfaces/types";
import { background } from "../../utils/colors";
import {
  OrdersContainer,
  Container,
  OrderClose,
  OrderOpen,
  Orders,
} from "./styles";

export const Filters = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { types, filterSelected, changeTypeSelected } =
    useContext(PokemonContext);
  const { changePage } = usePagination();

  const onChangeType = (type: PokemonType) => {
    changePage(1);
    navigate("/?page=1");
    changeTypeSelected(type);
  };

  return (
    <OrdersContainer onClick={() => setOpen(!open)}>
      <Container>
        {open ? (
          <OrderClose>
            <span>{filterSelected?.name}</span>
            <FiltersIcon />
          </OrderClose>
        ) : (
          <OrderOpen>
            <span>{filterSelected?.name}</span>
            <FiltersIcon />
          </OrderOpen>
        )}
        {open && types && (
          <Orders>
            {types.map((type: PokemonType) => (
              <div
                key={type.name}
                className="order"
                onClick={() => onChangeType(type)}
                style={{
                  fontWeight: filterSelected.name === type.name ? "bold" : "",
                }}
              >
                <div
                  className="color"
                  /* @ts-ignore */
                  style={{ background: background[type.name] }}
                />
                {type.name}
              </div>
            ))}
          </Orders>
        )}
      </Container>
    </OrdersContainer>
  );
};

const FiltersIcon = ({ ...props }) => {
  return (
    <svg {...props} width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M19.5 9L12 16.5L4.5 9"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
