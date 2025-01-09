import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./RouterApp.css";

const NavBarMenu = () => {
  // const navigate = useNavigate();
  // useEffect(() => {
  //   setTimeout(() => {
  //     navigate("/");
  //   }, 2000);
  // }, []);
  return (
    <nav>
      <ul className="li-style">
        <li>
          <Link className="link-style" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/Product">
            Product
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/About">
            About
          </Link>
        </li>
      </ul>
      <hr></hr>
    </nav>
  );
};

export default NavBarMenu;
