import React from "react";
import { Game } from "../types/Game";
import StarButton from "./StarButton"; // Ensure you import StarButton

interface GameCardProps {
  game: Game; // The game object containing relevant data
  onToggleFavorite: (game: Game) => void;
  isFavorite: boolean;
}

const GameCard: React.FC<GameCardProps> = ({
  game,
  onToggleFavorite,
  isFavorite,
}) => {
  return (
    <div
      style={{
        margin: "5px",
        padding: "0px",
        width: "115px",
        height: "115px",
        position: "relative", // Make parent relative for absolute positioning
        border: "1px solid #ccc", // Optional: Add a border for better visual separation
        borderRadius: "8px", // Optional: Add rounded corners
        overflow: "hidden", // Ensure content doesn't overflow the container
      }}
    >
      <img
        src={game.img}
        alt={game.name}
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        style={{
          position: "absolute",
          top: "5px", // Adjust for padding
          right: "5px", // Adjust for padding
        }}
      >
        <StarButton
          isFavorite={isFavorite}
          onClick={() => onToggleFavorite(game)} // Toggle favorite on click
        />
      </div>
    </div>
  );
};

export default GameCard;
