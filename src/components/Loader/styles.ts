import styled, { keyframes } from "styled-components";

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderStyled = styled.span<{ color: string; size?: number }>`
  align-self: center;
  animation: ${rotation} 1s linear infinite;
  border: 3px solid transparent;
  border-bottom-color: ${({ color }) => color || "white"};
  border-radius: 50%;
  box-sizing: border-box;
  display: inline-block;
  height: ${({ size }) => (size ? `${size}px` : "30px")};
  margin: 2rem;
  width: ${({ size }) => (size ? `${size}px` : "30px")};
`;
