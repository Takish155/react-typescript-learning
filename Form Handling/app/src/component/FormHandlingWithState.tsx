import { useState } from "react";

export default function FormHandlingWithState() {
  const [input, setInput] = useState<string>("");

  return (
    <>
      <h2>Form Handling With Ref</h2>
      <p>Input: {input} (will update every time it is changee)
      </p>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
    </>
  );
}
