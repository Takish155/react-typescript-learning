interface Expenses {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expenses[]; // Accepts a prop that's an array that has objects
  onDelete: (id: number) => void; // Accepts a function
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  // Will return null if theres no data
  if (expenses.length === 0) {
    return null;
  }
  return (
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {
          // Maps trough expenses array to create table row with data
          expenses.map((expense) => {
            return (
              <tr key={expense.id}>
                <td>{expense.description}</td>
                <td>${expense.amount}</td>
                <td>{expense.category}</td>
                <td>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => onDelete(expense.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })
        }
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>
            $
            {
              // Returns the total of expenses
              expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)
            }
          </td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
    </table>
  );
};

export default ExpenseList;
