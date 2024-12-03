import styled from "styled-components";

export const TypesContainer = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  margin-top: 75px;
  padding-top: 1rem;
`;

export const Type = styled.div<{ backgroundColor: string }>`
  background: ${({ backgroundColor }) => backgroundColor};
  border-radius: 1rem;
  color: white;
  font-family: "Parkinsans", sans-serif;
  font-weight: bold;
  padding: 0.2rem 1rem;
  text-transform: capitalize;
`;
