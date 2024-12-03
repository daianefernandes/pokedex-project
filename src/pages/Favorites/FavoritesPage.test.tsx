import React from "react";
import { render, screen } from "@testing-library/react";
import { FavoritesPage } from "../Favorites";

// Mock do componente Card
jest.mock("../../components/Card", () => ({
  Card: jest.fn(() => <div data-testid="pokemon-card">Mocked Card</div>),
}));

describe("FavoritesPage", () => {
  beforeEach(() => {
    // Limpa o localStorage antes de cada teste
    localStorage.clear();
    jest.clearAllMocks();
  });

  it("deve exibir a mensagem 'Nenhum Pokémon favoritado ainda.' quando não houver favoritos", () => {
    // Renderiza o componente sem favoritos
    render(<FavoritesPage />);

    // Verifica se a mensagem correta é exibida
    expect(screen.getByText("Nenhum Pokémon favoritado ainda.")).toBeInTheDocument();
  });

  it("deve renderizar os cartões dos Pokémons favoritos quando houver favoritos", () => {
    // Simula favoritos no localStorage
    const mockFavorites = [1, 2];
    localStorage.setItem("favorites", JSON.stringify(mockFavorites));

    // Renderiza o componente
    render(<FavoritesPage />);

    // Verifica se o título da página está aparecendo
    expect(screen.getByText("Meus Pokémons Favoritos")).toBeInTheDocument();

    // Verifica se os cartões são renderizados para os favoritos
    const cards = screen.getAllByTestId("pokemon-card");
    expect(cards).toHaveLength(mockFavorites.length);
  });
});
