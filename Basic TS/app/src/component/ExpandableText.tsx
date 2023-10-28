import { useState } from "react";

interface Props {
  children: string;
  maxChars: number;
}

export default function ExpandableText({ children, maxChars = 100 }: Props) {
  const [open, setOpen] = useState<boolean>(false);

  if (open) {
    return (
      <>
        <p>
          {children} <button onClick={() => setOpen(!open)}>Less</button>
        </p>
      </>
    );
  }

  if (maxChars >= children.length) {
    return (
      <>
        <p>{children}</p>
      </>
    );
  }
  return (
    <>
      <p>
        {children.substring(0, maxChars)}...{" "}
        <button onClick={() => setOpen(!open)}>Read more</button>
      </p>
    </>
  );
}
