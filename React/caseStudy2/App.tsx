import React from "react";
import BudgetTracker from "../../my-react-app/src/BudgetTracker";
import type { ConversionRates } from "./types";

const rates: ConversionRates = {
  USD: 1,
  INR: 91,
};

const App: React.FC = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Secure Banking Dashboard</h1>
      <BudgetTracker rates={rates} />
    </div>
  );
};

export default App;