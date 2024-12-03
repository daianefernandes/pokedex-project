import styled from "styled-components";

export const PaginationContainer = styled.div`
  align-items: center;
  display: flex;
  font-family: "Parkinsans", sans-serif;
  font-weight: bold;
  gap: 1rem;
  justify-content: center;
  margin: 1rem 0;

  button {
    background: #f7f7f7;
    border: none;
    border-radius: 0.5rem;
    color: #212121;
    cursor: pointer;
    font-size: 16px;
    padding: 0.6rem;
    transition-duration: 0.3s;

    &:hover {
      transform: scale(1.1);
    }

    &:disabled {
      background: #c2c2c2;
      color: #f7f7f7;
      cursor: not-allowed;
    }
  }
`;
