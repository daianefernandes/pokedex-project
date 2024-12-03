import styled from "styled-components";

export const PokemonContainer = styled.div`
  display: grid;
  gap: 5px;
  grid-template-columns: 300px 300px 300px; 
  justify-content: center;  
  padding: 1rem 2rem;
  margin: 0 auto;
  max-width: 1200px;
  width: 100%; 

  @media (max-width: 1000px) {
    grid-template-columns: 300px 300px; 
  }

  @media (max-width: 800px) {
    grid-template-columns: 300px;  
  }
`;

