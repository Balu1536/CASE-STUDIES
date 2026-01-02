export type Currency = "USD" | "INR";

export interface ConversionRates {
  USD: number;
  INR: number;
}

export interface IncomeEntry {
  id: string;
  amount: number;
  currency: Currency;
  source: string;
}

export interface ExpenseEntry {
  id: string;
  amount: number;
  currency: Currency;
  category: string;
}

export interface BudgetState {
  incomes: IncomeEntry[];
  expenses: ExpenseEntry[];
  selectedCurrency: Currency;
}


//type for actions like add income, add expense, change currency
export type BudgetAction = 
    { type: 'AddIncome'; payload: IncomeEntry }
  | { type: 'AddExpense'; payload: ExpenseEntry }
  | { type: 'ChangeCurrency'; payload: Currency };

