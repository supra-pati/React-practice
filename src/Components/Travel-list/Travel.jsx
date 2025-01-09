import React, { useState } from "react";
import "./Travel.css";

const initialItems = [
  { id: 1, description: "passports", quantity: 2, packed: false },
  { id: 2, description: "brush", quantity: 1, packed: true },
  { id: 3, description: "money", quantity: 5000, packed: false },
];

const Travel = () => {
  return (
    <div className="travel">
      <Logo></Logo>
      <Form></Form>
      <PackageList></PackageList>
      <Stats></Stats>
    </div>
  );
};

export default Travel;

function Logo() {
  return (
    <div>
      <h1> 🌴 FAR AWAY 👜</h1>
    </div>
  );
}

function Form() {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [items, setItems] = useState([]);

  const handleAddItem = (item) => {
    setItems((items) => [...items, item]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description) {
      return;
    }
    const newItem = { id: Date.now(), packed: false, description, quantity };
    console.log(newItem);
    setDescription("");
    setQuantity(1);
    handleAddItem(newItem);
  };

  return (
    //  we write on submit in for so as if we click enter agter filling the input the form should get submit
    <form className="add-form" onSubmit={handleSubmit}>
      <h3> what do you need for your trip 🛍️</h3>
      <select
        value={quantity}
        onChange={(e) => {
          setQuantity(Number(e.target.value)); //e is SyntheticBaseEvent why and how?
        }}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="ITEMS..."
        value={description}
        onChange={(e) => {
          setDescription(e.target.value);
        }}
      ></input>
      <button>ADD</button>
    </form>
  );
}
function PackageList() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((tripItem) => (
          <Item key={tripItem.id} item={tripItem}></Item>
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.description} {item.quantity}
      </span>
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em> you have X item in you list, and you already packed X (X%)🧳</em>
    </footer>
  );
}
