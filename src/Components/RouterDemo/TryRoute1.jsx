import React from "react";
import "./TryRoute1.css";
import { Link, Route, Routes } from "react-router-dom";
import AgeForm from "../Try/AgeForm";
import Greet from "../Greet";
import Steps from "../Steps/Steps";

const TryRoute1 = () => {
  return (
    <div>
      <ul className="li-style">
        <li>
          <Link className="link-style" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link-style" to="/ageform">
            AgeForm
          </Link>
        </li>

        <li>
          <Link className="link-style" to="/greet">
            Greet
          </Link>
        </li>
      </ul>
      <hr></hr>

      <Routes>
        <Route path="/" element={<Steps />}></Route>
        <Route path="/ageform" element={<AgeForm />}></Route>
        <Route path="/greet" element={<Greet />}></Route>
      </Routes>
    </div>
  );
};

export default TryRoute1;
