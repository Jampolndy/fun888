import React from "react";
import { Provider } from "../types/Provider"; // Ensure the import path is correct
import ProviderCard from "./ProviderCard"; // Ensure the import path is correct

interface ProviderListProps {
  providers: Provider[]; // Ensure this type has the required properties
}

const ProviderList: React.FC<ProviderListProps> = ({ providers }) => {
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {" "}
      {/* Added gap for better spacing */}
      {providers.map((provider) => (
        <ProviderCard key={provider.id} provider={provider} />
      ))}
    </div>
  );
};

export default ProviderList;
