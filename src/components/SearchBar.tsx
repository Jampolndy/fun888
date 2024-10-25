import React from "react";

interface SearchBarProps {
  onSearch: (term: string) => void;
  searchTerm: string; // New prop for the search term
  setSearchTerm: (term: string) => void; // New prop for setting the search term
  style?: React.CSSProperties; // Optional style prop
  icon: string; // New prop for the search icon
}

const SearchBar: React.FC<SearchBarProps> = ({
  onSearch,
  searchTerm,
  setSearchTerm,
  style,
  icon,
}) => {
  return (
    <div style={{ position: "relative", width: "100%" }}>
      <input
        type="text"
        value={searchTerm} // Set the input value to the search term
        onChange={(e) => {
          const newTerm = e.target.value;
          setSearchTerm(newTerm); // Update the search term state
          onSearch(newTerm); // Call the onSearch function
        }}
        style={{
          width: "320px", // Full width
          height: "32px",
          border: "1px solid #00A6FF", // Border color
          borderRadius: "6px", // Rounded corners
          color: "#444444", // Text color
          padding: "8px 30px 8px 40px", // Padding with extra space for icon
          boxSizing: "border-box", // Include padding in width/height
          outline: "none", // Remove default focus outline
          transition: "border-color 0.2s", // Smooth transition for border color
          ...style, // Apply the style prop here
        }}
      />
      <img
        src={icon}
        alt="Search"
        style={{
          position: "absolute",
          left: "10px",
          top: "50%",
          transform: "translateY(-50%)",
          width: "20px",
          height: "20px",
          pointerEvents: "none", // Prevent clicking on the icon
        }}
      />
    </div>
  );
};

export default SearchBar; // Default export
