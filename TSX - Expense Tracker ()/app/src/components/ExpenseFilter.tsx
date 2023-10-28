import category from "./category";

interface Props {
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={(e) =>
          onSelectCategory((e.target as HTMLSelectElement).value)
        }
      >
        <option value="">All Categories</option>
        {category.map((ele) => (
          <option key={ele} value={ele}>
            {ele}
          </option>
        ))}
      </select>
    </div>
  );
};
