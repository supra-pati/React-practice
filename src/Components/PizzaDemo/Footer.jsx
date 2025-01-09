import React from "react";
import "./Footer.css";

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 20;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    <>
      <footer className="footer">
        {isOpen ? (
          <div className="order">
            <p>We are opened untill {closeHour}:00. And You can order also!!</p>
            <button className="btn">Order</button>
          </div>
        ) : (
          <p>
            we are happy to welcome you between {openHour}:00 to {closeHour}:00.
            See you again :)
          </p>
        )}
      </footer>
    </>
  );
};

export default Footer;
