import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

// Way to vadilate a form
const schema = z.object({
  name: z
    .string()
    .min(3, { message: "Must include 3 words" /* Way to change error msg */ }) // Initialize minium value of 3
    .max(8, { message: "Must have less than 8 words" }), // Initialize maxinum value of 8
});

// For type safety purposes
type FormData = z.infer<typeof schema>;

export default function FormHandlingWithReactHookForm() {
  // Get data, initialize the schema
  const {
    register, // Way to add remembrance in a input
    handleSubmit, // Function for handle submit
    formState: { errors, isValid }, // Way to handle errors, or schema
  } = useForm<FormData>({ resolver: zodResolver(schema) }); // To initialize our schema

  const [input, setInput] = useState<string>("");

  const onSubmit = (data: FieldValues) => {
    setInput(data.name);
    console.log(data.name);
  };
  return (
    <>
      <h2>Form Handling with React Hook Form</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <p>Input: {input} (only register if submitted)</p>
        <input
          type="text"
          {
            ...register("name") /* Way to initialize inputs */
          }
        />
        {
          errors.name && (
            <p className="danger">{errors.name.message}</p>
          ) /* Way to initialize errors */
        }

        <button type="submit" disabled={!isValid}>
          Submit
        </button>
      </form>
    </>
  );
}
