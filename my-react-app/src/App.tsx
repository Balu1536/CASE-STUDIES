import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import type { Asset } from './types'
import AssetEditor from './components1/AssetEditor'
import PortfolioSummary from './components1/PortfolioSummary'

function App() {
  const [assets, setAssets] = useState<Asset[]>([])
  const handleUpdate = (asset: Asset) => {
      setAssets([...assets, asset]);
  };
  return (
    <>
      <div>
        <h2>Smart Portfolio Dashboard</h2>
        <AssetEditor onUpdate={handleUpdate} />
        <PortfolioSummary assets={assets} />
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
