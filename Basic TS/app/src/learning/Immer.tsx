import { produce } from "immer";
import { useState } from "react";

interface Contact {
  name: string;
  email: string;
  phoneNumber: number;
}

type ContactList = Contact[];

export default function Immer() {
  const [contact, setContact] = useState<ContactList>([]);

  return (
    <>
      <h1>Contact List</h1>
      {contact.map((ele, index) => {
        if (ele) {
          return (
            <ul key={index + 100}>
              <li>Name: {ele.name}</li>
              <li>Email: {ele.email}</li>
              <li>PhoneNumber: {ele.phoneNumber}</li>
            </ul>
          );
        }
        return "";
      })}
      <button
        onClick={() =>
          setContact(
            produce((draft) => {
              draft.push({
                name: "Takeshi",
                email: "idk@wda.co",
                phoneNumber: 9344,
              });
            })
          )
        }
      >
        Add
      </button>
      <button
        onClick={() => {
          setContact(
            produce((draft) => {
              const remove = draft.findIndex(
                (remove) => remove.name === "Takeshi"
              );
              if (remove !== -1) {
                draft.splice(remove, 1);
              }
            })
          );
        }}
      >
        Remove
      </button>
    </>
  );
}
