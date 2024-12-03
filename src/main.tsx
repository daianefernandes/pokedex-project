import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home, PokemonDetails } from "./pages";
import "./globalStyles";
import PokemonProvider from "./context/PokemonContext";
import { FavoritesPage } from "./pages/Favorites";
import React from "react";

const router = createBrowserRouter([
  {
    path: "/", 
    element: <Home />,
  },
  {
    path: "/favorites", 
    element: <FavoritesPage />,
  },
  {
    path: "/:pokeId", 
    element: <PokemonDetails />,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <PokemonProvider>
    <RouterProvider router={router} />
  </PokemonProvider>
);
