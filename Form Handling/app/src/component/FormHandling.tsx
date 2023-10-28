import { FormEvent, useRef, useState } from "react";

export default function FormHandling() {
  // when ref are changed, it doesn't cause any re-renders
  const inputRef = useRef<HTMLInputElement>(null);
  const [input, setInput] = useState<string>("");

  const handleSubmit = (e: FormEvent): void => {
    e.preventDefault();
    if (inputRef.current !== null) {
      setInput(inputRef.current.value);
    }
    console.log(inputRef.current?.value);
  };
  return (
    <>
      <h2>Form Handling With Ref</h2>
      <p>
        Input: {inputRef.current?.value} (wont update till it re-renders since
        ref doesn't trigger re-renders)
      </p>
      <form onSubmit={handleSubmit}>
        <input type="text" ref={inputRef} />
        <button type="submit">Subit</button>
      </form>
    </>
  );
}
