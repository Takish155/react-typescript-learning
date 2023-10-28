import { useState } from "react";

interface Props {
  arr: string[];
  header: string;
  handleClick: (item: string) => void;
}

export default function ListGroup({ arr, header, handleClick }: Props) {
  const [active, setActive] = useState<number>(-1);

  return (
    <>
      <div>
        <h1>{header}</h1>
        <ul className="list-group">
          {arr.map((element, index) => {
            return (
              <li
                key={index}
                className={
                  active === index
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => {
                  active !== index ? setActive(index) : setActive(-1);
                  handleClick(element);
                }}
              >
                {element}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
