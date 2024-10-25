import React from "react";
import { Game } from "../types/Game";
import GameCard from "./GameCard";

interface GameListProps {
  games: Game[];
  onToggleFavorite: (game: Game) => void;
  favorites: Game[];
  selectedProviderId?: string; // Optional selected provider ID
}

const GameList: React.FC<GameListProps> = ({
  games,
  onToggleFavorite,
  favorites,
  selectedProviderId,
}) => {
  // Filter games based on the selected provider
  const filteredGames = selectedProviderId
    ? games.filter((game) => game.providerId === selectedProviderId)
    : games;

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {filteredGames.map((game) => (
        <GameCard
          key={game.id} // Use a unique identifier (e.g., game.id)
          game={game}
          onToggleFavorite={onToggleFavorite}
          isFavorite={favorites.some((fav) => fav.id === game.id)} // Check if the game is a favorite
        />
      ))}
    </div>
  );
};

export default GameList;
