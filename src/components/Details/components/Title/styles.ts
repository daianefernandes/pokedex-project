import styled from "styled-components";

export const TitleText = styled.span<{ backgroundSelected: string }>`
  color: ${({ backgroundSelected }) => backgroundSelected};
  font-family: "Parkinsans", sans-serif;
  font-size: 20px;
  font-weight: bold;
  margin: 35px 0 2px 0;
  text-align: center;
`;
