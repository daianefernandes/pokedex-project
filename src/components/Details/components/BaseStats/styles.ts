import styled from "styled-components";

export const StatsContainer = styled.div`
  display: flex;
  font-family: "Parkinsans", sans-serif;
  flex-direction: column;
  margin: 0.5rem 0;
  width: 100%;
`;

export const StatItem = styled.div`
  display: flex;
  width: 100%;
`;

export const StatLabel = styled.span<{ backgroundSelected: string }>`
  border-right: 1px solid #e0e0e0;
  color: ${({ backgroundSelected }) => backgroundSelected};
  font-family: "Parkinsans", sans-serif;
  font-size: 11px;
  font-weight: bold;
  margin: 1rem 1rem;
  padding-right: 1rem;
  text-align: right;
  text-transform: uppercase;
  width: 20%;
`;

export const StatRight = styled.div`
  align-items: center;
  display: flex;
  gap: 1rem;
  width: 60%;
`;

export const StatValue = styled.p`
  width: 10%;
`;

export const StatBarContainer = styled.div`
  position: relative;
  width: 100%;
`;

export const StatBarBackground = styled.div<{ backgroundSelected: string }>`
  background: ${({ backgroundSelected }) => backgroundSelected};
  border-radius: 8px;
  height: 10px;
  opacity: 0.5;
  width: 100%;
`;

export const StatBar = styled.div<{
  widthPercentage: string;
  backgroundSelected: string;
}>`

  background: ${({ backgroundSelected }) => backgroundSelected};
  border-radius: 8px;
  left: 0;
  height: 10px;
  opacity: 1;
  position: absolute;
  top: 0;
  width: ${({ widthPercentage }) => widthPercentage};
`;
