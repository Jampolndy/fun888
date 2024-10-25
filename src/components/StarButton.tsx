import React from "react";

interface StarButtonProps {
  isFavorite: boolean;
  onClick: () => void;
}

const StarButton: React.FC<StarButtonProps> = ({ isFavorite, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: "pointer",
        position: "absolute",
        top: "2px",
        right: "2px",
      }}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill={isFavorite ? "yellow" : "gray"} // Change color based on favorite status
      >
        <path d="M12 .587l3.668 7.431 8.237 1.196-5.949 5.794 1.405 8.195L12 18.897l-7.361 3.86 1.405-8.195-5.949-5.794 8.237-1.196z" />
      </svg>
    </div>
  );
};

export default StarButton;
