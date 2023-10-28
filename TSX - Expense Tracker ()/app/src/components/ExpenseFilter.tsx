import category from "./category";

interface Props {
  // Creates type onSelectCategory that has parameter of category that returns nothing
  onSelectCategory: (category: string) => void;
}

export const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <div className="mb-3">
      <select
        className="form-select"
        onChange={
          (e) => onSelectCategory((e.target as HTMLSelectElement).value) // Adds a type of HTMLSelectElement
        }
      >
        <option value="">All Categories</option>
        {
          // Maps over the catagory array
          category.map((ele) => (
            <option key={ele} value={ele}>
              {ele}
            </option>
          ))
        }
      </select>
    </div>
  );
};
