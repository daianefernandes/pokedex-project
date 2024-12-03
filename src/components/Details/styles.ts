import styled from "styled-components";

export const Bg = styled.div<{ background: string }>`
  align-items: center;
  background: ${({ background }) => background};
  bottom: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;
  left: 0;
  margin: 0;
  min-height: 100vh;
  padding: 0;
  position: absolute; 
  right: 0;
  top: 0;
`;

export const Info = styled.div`
  align-items: center;
  background-color: white;
  bottom: 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  height: 65vh;
  margin-bottom: 1rem;
  max-width: 650px;
  position: relative;
  width: 95%;

  img {
    height: 275px;
    margin: 0 auto;
    margin-top: -200px;
    object-fit: contain;
    position: absolute;
    width: 275px;
  }
`;

export const LoadingContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;
