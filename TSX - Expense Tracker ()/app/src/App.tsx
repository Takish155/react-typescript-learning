import { useState } from "react";
import "./App.css";
import ExpenseList from "./components/ExpenseList";
import { ExpenseFilter } from "./components/ExpenseFilter";
import { ExpenseForm, ExpenseFormData } from "./components/ExpenseForm";

function App() {
  const [currentCategory, setCurrentCategory] = useState("");
  const [expenses, setExpenses] = useState([
    {
      id: 1,
      description: "Why is Typescript so Hard",
      amount: 10,
      category: "Utilities",
    },
    { id: 2, description: "aaa", amount: 10, category: "Utilities" },
  ]);

  const onSubmit = (data: ExpenseFormData) => {
    setExpenses([
      ...expenses,
      {
        id: expenses.length + 1,
        description: data.description,
        amount: data.amount,
        category: data.category,
      },
    ]);
  };

  const visibleExpenses = currentCategory
    ? expenses.filter((ele) => ele.category === currentCategory)
    : expenses;

  return (
    <main className="w-1/2 mx-auto p-20">
      <ExpenseForm onSubmit={onSubmit} />
      <ExpenseFilter
        onSelectCategory={(category) => setCurrentCategory(category)}
      />
      <ExpenseList
        expenses={visibleExpenses}
        onDelete={(id) => setExpenses(expenses.filter((ele) => ele.id !== id))}
      />
    </main>
  );
}

export default App;
