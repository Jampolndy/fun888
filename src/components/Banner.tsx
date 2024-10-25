import React, { useState, useEffect } from "react";
import bannerImage from "../assets/banner.png"; // Import the banner image

const Banner: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [bannerImage, bannerImage, bannerImage]; // Array of images (same image used)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Clear interval on unmount
  }, [images.length]);

  return (
    <div style={{ width: "97%", overflow: "hidden" }}>
      <div
        style={{
          display: "flex",
          transition: "transform 0.5s ease",
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Banner ${index + 1}`}
            style={{ width: "100%", height: "auto" }}
          />
        ))}
      </div>
    </div>
  );
};

export default Banner;
