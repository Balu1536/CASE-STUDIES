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
    <div style={{alignItems:"center"}}>
      <h1>My Portfolio Dashboard</h1>
      <AssetEditor onUpdate={handleUpdate} />
      <PortfolioSummary assets={assets} />
      
    {assets.length === 0 && <p>No assets added yet</p>}

      {assets.map((asset) => (
        <div
          key={asset.symbol}
          style={{
            border: "1px solid #ccc",
            padding: "10px",
            margin: "10px",
            width: "250px",
          }}
        >
          <p><b>name:</b>{asset.name}</p>
          <p><b>symbol:</b>{asset.symbol}</p>
          <p><b>value:</b>{asset.value}</p>
          <p><b>change:</b>{asset.change}</p>
        </div>

      ))}
    </div>
  );
};

export default App;