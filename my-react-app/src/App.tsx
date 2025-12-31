// src/App.tsx
import React, { useState } from "react";
import PortfolioSummary from "./components1/PortfolioSummary";
import AssetEditor from "./components1/AssetEditor";
import type { Asset } from "./components1/PortfolioSummary";

const App: React.FC = () => {
  const [assets, setAssets] = useState<Asset[]>([]);

  const handleUpdate = (asset: Asset) => {
    setAssets((prev) => {
      const existing = prev.find((a) => a.symbol === asset.symbol);
      if (existing) {
        return prev.map((a) => (a.symbol === asset.symbol ? asset : a));
      }
      return [...prev, asset];
    });
  };

  return (
    <div>
      <center>
      <h1>My Portfolio Dashboard</h1>
      <AssetEditor onUpdate={handleUpdate} />
      <PortfolioSummary assets={assets} />
      </center>
    </div>
  );
};

export default App;