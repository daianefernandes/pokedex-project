import styled from "styled-components";

export const PokemonCard = styled.div`
  display: grid;
  gap: 15px;
  grid-template-columns: 300px 300px 300px;
  justify-content: center;
  padding: 1rem 2rem;
  margin: 0 280px 0 280px;
  max-width: 1200px;
  width: 100%;

  @media (max-width: 1000px) {
    grid-template-columns: 300px 300px;
  }

  @media (max-width: 800px) {
    grid-template-columns: 300px;
  }
`;

export const CardContainer = styled.div`
  color: inherit;
  cursor: pointer;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 300px;
  text-decoration: none;
  width: 100%; 
  margin: 0 auto;

  &:hover {
    box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    -webkit-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    -moz-box-shadow: -1px 10px 30px -15px rgba(0, 0, 0, 0.65);
    transition-duration: 0.3s;
  }
`;

export const Top = styled.div<{ borderColor: string }>`
  align-items: center;
  border: 1px solid transparent;
  border-bottom: none;
  border-color: ${({ borderColor }) => borderColor};
  border-radius: 8px 8px 0 0;
  display: flex;
  flex-direction: column;

  span {
    text-align: end;
    padding: 4px 8px 0px;
  }

  img {
    width: 90%;
    height: 140px;
    object-fit: contain;
    padding: 0.5rem 1rem;
  }
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  height: 140px;
  justify-content: center;
`;

export const Bottom = styled.div<{ background: string }>`
  background: ${({ background }) => background};
  border-radius: 0 0 8px 8px;
  color: white;
  font-family: "Parkinsans", sans-serif;
  font-size: 16px;
  line-height: 16px;
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
`;
