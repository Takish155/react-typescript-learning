import { useState } from "react";
import { produce } from "immer";

interface Contact {
  name: string;
  phone: number;
  techStack: string[];
  realPerson: string;
}

interface Cart {
  id: number;
  title: string;
  quantity: number;
}

type ContactState = Contact[];

type CartState = Cart[];

interface ActualCart {
  discount: number;
  items: CartState;
}

type Props = {
  handleClick: () => void;
  showAlert: boolean;
};

export const AlertButton = ({ handleClick, showAlert }: Props) => {
  const [contactList, setContactList] = useState<ContactState>([
    {
      name: "takeshi",
      phone: 23132,
      techStack: ["HTML", "CSS", "Javascript", "React"],
      realPerson: "true",
    },
    {
      name: "idk",
      phone: 2313,
      techStack: ["Idk", "FR"],
      realPerson: "false",
    },
  ]);

  const [cart, setCart] = useState<ActualCart>({
    discount: 0.1,
    items: [
      {
        id: 1,
        title: "Product 1",
        quantity: 1,
      },
      {
        id: 2,
        title: "Product 2",
        quantity: 1,
      },
    ],
  });

  return (
    <div>
      {cart.items.map((ele, index) => {
        return (
          <ul key={index + 92}>
            <li>Id: {ele.id}</li>
            <li>Title: {ele.title}</li>
            <li>Quantity {ele.quantity}</li>
          </ul>
        );
      })}
      <button
        onClick={() => {
          setCart(
            produce((draft) => {
              const addQuantity = draft.items.find((ele) => ele.id === 1);
              if (addQuantity) {
                addQuantity.quantity += 1;
              }
            })
          );
        }}
      >
        Add Quantity
      </button>
      {contactList.map((ele, index) => {
        return (
          <ul key={index + 324}>
            <li>{ele.name}</li>
            <li>{ele.phone}</li>
            <li>{ele.techStack.join(", ")}</li>
            <li>Is Human : {ele.realPerson}</li>
          </ul>
        );
      })}
      <div
        className={
          showAlert
            ? "alert alert-warning alert-dismissible fade show"
            : "alert alert-warning alert-dismissible fade"
        }
        role="alert"
      >
        Wassup man!
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="alert"
          onClick={handleClick}
        ></button>
      </div>
      <button
        onClick={handleClick}
        className="btn btn-primary"
        disabled={showAlert ? true : false}
      >
        Click me for alert!
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setContactList(
            produce((draft) => {
              const name = draft.find((ele) => ele.name === "takeshi");
              if (name) {
                name.name = "Takeshi WhoKnows";
              }
            })
          );
        }}
      >
        Set name
      </button>
      <button
        className="btn btn-primary"
        onClick={() => {
          setContactList(
            produce((draft) => {
              const takeshis = draft.find((ele) => ele.name === "takeshi");
              if (takeshis) {
                takeshis.techStack.push("TypeScript");
              }
            })
          );
        }}
      >
        Add TypeScript
      </button>
      <button
        className="btn btn-primary"
        onClick={() =>
          setContactList(
            produce((draft) => {
              const real = draft.find((real) => real.phone === 2313);
              if (real) {
                real.realPerson = "truedd";
              }
            })
          )
        }
      >
        Add
      </button>
    </div>
  );
};
