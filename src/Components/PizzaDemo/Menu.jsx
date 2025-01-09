import React from "react";
import Pizzas from "./Pizzas";
import "./Menu.css";
import pizzaData from "./pizzaName";
import "./Pizzas.css";

const Menu = () => {
  return (
    <main className="menu">
      <h2>Our menu:</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizzas key={pizza.name} pizzaObj={pizza} />
        ))}
      </ul>
      {/* <Pizzas
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price={22}
        soldOut="false"
      />
      <Pizzas
        name="Pizza Margherita"
        ingredients="Tomato and mozarella"
        price={10}
        soldOut="false"
      /> */}
    </main>
  );
};

export default Menu;
