import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { ExpenseForm, ExpenseFormData } from "./components/ExpenseForm";

function App() {
  // Sets the current catergory
  const [currentCategory, setCurrentCategory] = useState("");

  // State for data of the expenses
  const [expenses, setExpenses] = useState([
    // Template
    { id: 0, description: "", amount: 0, category: "" },
  ]);

  // Submit function
  const onSubmit = (data: ExpenseFormData) => {
    setExpenses([
      ...expenses, // Creates shallow copy of Expenses
      {
        id: expenses.length + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  // Filters the expenses data by category and removes the template
  const visibleExpenses = currentCategory
    ? expenses.filter((ele) => ele.category === currentCategory || ele.id !== 0)
    : expenses.filter((ele) => ele.id !== 0);

  return (
    <main className="w-1/2 mx-auto p-20">
      {/* Expense Form Section */}
      <ExpenseForm onSubmit={onSubmit} />
      {/* Expense Data Filter Section */}
      <ExpenseFilter
        onSelectCategory={(category) => setCurrentCategory(category)}
      />{" "}
      {/* Expense List Section */}
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((ele) => ele.id !== id))}
      />{" "}
    </main>
  );
}

export default App;
