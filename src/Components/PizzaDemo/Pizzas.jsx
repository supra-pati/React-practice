import "./Pizzas.css";

const Pizzas = ({ pizzaObj }) => {
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""} `}>
      <img src={pizzaObj.photoName} alt="pizza pic"></img>
      <h3>{pizzaObj.name}</h3>
      <p>{pizzaObj.ingredients}</p>
      <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
    </li>
  );
};

export default Pizzas;
