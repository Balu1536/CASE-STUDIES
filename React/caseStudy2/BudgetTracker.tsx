import React, { useReducer, useState } from "react";

import type {
  BudgetAction,
  BudgetState,
  Currency,
  IncomeEntry,
  ExpenseEntry,
  ConversionRates,
} from "./types";

/* ---------- Props ---------- */
interface BudgetTrackerProps {
  rates: ConversionRates;
}

/* ---------- Reducer ---------- */
const budgetReducer = (
  state: BudgetState,
  action: BudgetAction
): BudgetState => {
  switch (action.type) {
    case "AddIncome":
      return { ...state, incomes: [...state.incomes, action.payload] };

    case "AddExpense":
      return { ...state, expenses: [...state.expenses, action.payload] };

    case "ChangeCurrency":
      return { ...state, selectedCurrency: action.payload };

    default:
      return state;
  }
};

/* ---------- Initial State ---------- */
const initialState: BudgetState = {
  incomes: [],
  expenses: [],
  selectedCurrency: "USD",
};

/* ---------- Conversion ---------- */
const convertAmount = (
  amount: number,
  from: Currency,
  to: Currency,
  rates: ConversionRates
): number => {
  if (from === to) return amount;
  return (amount / rates[from]) * rates[to];
};

const calculateBalance = (
  incomes: IncomeEntry[],
  expenses: ExpenseEntry[],
  selectedCurrency: Currency,
  rates: ConversionRates
): number => {
  const incomeTotal = incomes.reduce(
    (sum, i) =>
      sum +
      convertAmount(i.amount, i.currency, selectedCurrency, rates),
    0
  );

  const expenseTotal = expenses.reduce(
    (sum, e) =>
      sum +
      convertAmount(e.amount, e.currency, selectedCurrency, rates),
    0
  );

  return incomeTotal - expenseTotal;
};

/* ---------- Component ---------- */
const BudgetTracker: React.FC<BudgetTrackerProps> = ({ rates }) => {
  const [state, dispatch] = useReducer(budgetReducer, initialState);
  const [incomeAmount, setIncomeAmount] = useState<number>(0);
  const [expenseAmount, setExpenseAmount] = useState<number>(0);

  const balance = calculateBalance(
    state.incomes,
    state.expenses,
    state.selectedCurrency,
    rates
  );

  const handleIncomeSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    dispatch({
      type: "AddIncome",
      payload: {
        id: Date.now().toString(),
        amount: incomeAmount,
        currency: state.selectedCurrency,
        source: "Salary",
      },
    });
  };

  const handleExpenseSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const expenseValue = convertAmount(
      expenseAmount,
      state.selectedCurrency,
      state.selectedCurrency,
      rates
    );

    if (balance - expenseValue < 0) {
      alert("Negative balance not allowed");
      return;
    }

    dispatch({
      type: "AddExpense",
      payload: {
        id: Date.now().toString(),
        amount: expenseAmount,
        currency: state.selectedCurrency,
        category: "Food",
      },
    });
  };

  return (
    <div>
      <h3>
        Balance: {balance} {state.selectedCurrency}
      </h3>

      <form onSubmit={handleIncomeSubmit}>
        <input
          type="number"
          value={incomeAmount}
          onChange={(e) => setIncomeAmount(Number(e.target.value))}
        />
        <button>Add Income</button>
      </form>

      <select
        value={state.selectedCurrency}
        onChange={(e) =>
          dispatch({
            type: "ChangeCurrency",
            payload: e.target.value as Currency,
          })
        }
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>

      <form onSubmit={handleExpenseSubmit}>
        <input
          type="number"
          value={expenseAmount}
          onChange={(e) => setExpenseAmount(Number(e.target.value))}
        />
        <button>Add Expense (INR)</button>

      </form>

      <select
        value={state.selectedCurrency}
        onChange={(e) =>
          dispatch({
            type: "ChangeCurrency",
            payload: e.target.value as Currency,
          })
        }
      >
        <option value="USD">USD</option>
        <option value="INR">INR</option>
      </select>
      
    </div>
  );
};

export default BudgetTracker;
