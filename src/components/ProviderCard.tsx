import React from "react";
import { Provider } from "../types/Provider";

interface ProviderCardProps {
  provider: Provider; // Assuming Provider already has the img property
}

const ProviderCard: React.FC<ProviderCardProps> = ({ provider }) => {
  return (
    <div style={{ margin: "10px", textAlign: "center" }}>
      <img
        src={provider.img}
        alt={provider.name}
        style={{ width: "50px", height: "50px", borderRadius: "5px" }} // Added border-radius for a nicer look
      />
      <div style={{ marginTop: "5px", fontSize: "14px" }}>{provider.name}</div>{" "}
      {/* Improved font size for better readability */}
    </div>
  );
};

export default ProviderCard;
