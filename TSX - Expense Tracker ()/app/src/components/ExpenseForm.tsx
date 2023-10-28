import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import category from "./category";

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

// Initialize a form schema from Zod
const schema = z.object({
  // Creates schema for input named "description" with min character of 3 and max character of 20
  description: z
    .string() // Sets the type to string
    .min(3, { message: "Description should be at least 3 characters" }) // Sets the message of error
    .max(20),
  // Creates schema for input named "amount" with min number of 1 and max of 100_0000
  amount: z
    .number() // Sets the type to number
    .min(1, { message: "Amout must be atleast higher than 0" }) // Sets the message of error
    .max(100_000),
  // Creates schema for select named "categiry" with category as only value allowed
  category: z.enum(category, {
    errorMap: () => ({ message: "Category is required" }), // Sets the message of error
  }),
});

// Initializes the type for the form schema
export type ExpenseFormData = z.infer<typeof schema>;

export const ExpenseForm = ({ onSubmit }: Props) => {
  // Initializes the React Hook Form
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({
    resolver: zodResolver(schema),
  });
  return (
    <div className="mb-3">
      <form
        // Handles the submit,
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          // Resets the input
          reset();
        })}
      >
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            // Initializes the input with the name of "description" React Hook Form
            {...register("description")}
            id="description"
            type="text"
            className="form-control"
          />
          {
            // Checks if theres a error with the input/schema
            errors.description && (
              <p className="text-danger">{errors.description.message}</p>
            )
          }
        </div>
        <div className="mb-3">
          <label htmlFor="amount" className="form-label">
            Amount
          </label>
          <input
            {
              // Initializes the input with the name of "amount" React Hook Form
              ...register("amount", { valueAsNumber: true }) // Turns the string into a number
            }
            id="amount"
            type="number"
            className="form-control"
          />

          {
            // Checks if theres a error with the input/schema
            errors.amount && (
              <p className="text-danger">{errors.amount.message}</p>
            )
          }
        </div>
        <div className="mb-3">
          <label htmlFor="category" className="form-label"></label>
          <select
            {
              // Initializes the select with the name of "amount" on React Hook Form
              ...register("category")
            }
            id="category"
            className="form-select"
          >
            {
              // Maps the category array to select on
              category.map((ele) => (
                <option key={ele} value={ele}>
                  {ele}
                </option>
              ))
            }
          </select>
          {
            // Checks if theres an error with the input/schema
            errors.category && (
              <p className="text-danger">{errors.category.message}</p>
            )
          }
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};
