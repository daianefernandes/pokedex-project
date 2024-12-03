import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeContainer = styled.div`
  background-color: #f7f7f7;
  max-width: 100vw;
  min-height: 100vh;
`;

export const Header = styled.header`
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  padding: 1rem 0;
  width: 100%;
`;

export const HeaderContent = styled.div`
  align-items: center;
  cursor: pointer;
  display: flex;
  gap: 1rem;
  justify-content: center;
  width: fit-content;
`;

export const HeaderTitle = styled.span`
  color: #212121;
  font-family: "Parkinsans", sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 32px;
  margin: 55px 0 55px 0;
`;

export const HeaderIcon = styled.svg`
  width: 24px;
`;

export const FavoritesLink = styled(Link)`
  background-color: transparent;
  border-radius: 8px;
  color: #54b3d6;
  cursor: pointer;
  display: block;
  font-family: "Parkinsans", sans-serif;
  font-size: 14px;
  margin-bottom: 45px;
  margin-left: auto;
  margin-right: auto;
  max-height: 150px;
  max-width: 150px;
  padding: 0.5rem 1rem;
  text-align: center;
  text-decoration: none;
  transition: background-color 0.3s ease-in-out, color 0.3s ease-in-out;

  &:hover {
    background-color: #54b3d6;
    border-radius: 8px;
    color: white; 
  }
`;
