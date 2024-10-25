import React from "react";

interface HeaderImageProps {
  imageUrls: string[];
  altTexts: string[];
  styles: React.CSSProperties[]; // Accept an array of styles
}

const HeaderImage: React.FC<HeaderImageProps> = ({
  imageUrls,
  altTexts,
  styles,
}) => {
  return (
    <div style={{ display: "flex", width: "100%" }}>
      {imageUrls.map((url, index) => (
        <img
          key={index}
          src={url}
          alt={altTexts[index]}
          style={{ ...styles[index], width: "auto", height: "20px" }} // Apply individual styles
        />
      ))}
    </div>
  );
};

export default HeaderImage;
