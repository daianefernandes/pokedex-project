// styles.ts
import styled from "styled-components";
import { ArrowLeftIcon } from "../../../../assets/pageArrows";

export const HeaderContainer = styled.header`
  align-items: center;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 2rem;
  position: relative;
  max-width: 650px;
  width: 100%;
`;

export const LeftSection = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
`;

export const StyledArrowLeftIcon = styled(ArrowLeftIcon)`
  cursor: pointer;

  &:hover {
    transform: scale(1.2);
    transition-duration: 0.3s;
  }
`;

export const PokemonName = styled.span`
  font-family: "Parkinsans", sans-serif;
  font-size: 32px;
  font-weight: bold;
  text-transform: capitalize;
`;