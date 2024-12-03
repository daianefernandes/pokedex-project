import styled from "styled-components";

export const FavoritesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 16px;
`;

export const FavoriteCard = styled.div`
  border: 1px solid #ccc;
  padding: 16px;
  text-align: center;
  background-color: #f9f9f9;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
`;

export const FavoritesTitle = styled.span`
  color: #212121;
  font-family: "Parkinsans", sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 32px;
  margin: 55px 0 35px 0;
`;