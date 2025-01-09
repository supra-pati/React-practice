import React, { useState, useEffect } from "react";
import { Link, Route, Routes, useNavigate } from "react-router-dom";
import GetTime from "../GetTime";
import "./AgeForm.css";
import CustData from "./CustData";

const AgeForm = () => {
  const navigate = useNavigate();
  const [objForm, setObjForm] = useState({
    Name: "",
    Password: "",
    Age: "",
    Email: "",
  });
  const [records, setRecords] = useState([]);
  const [formError, setFormError] = useState([]);
  const [isSubmit, setIsSubmit] = useState(false);
  const [isvisible, setIsvisible] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    // const name = e.target.name;
    // const value = e.target.value;
    setObjForm({ ...objForm, [name]: value });
    if (name === "Age" && value > 18) {
      setIsvisible(true);
    } else if (name === "Age" && value < 18) {
      setIsvisible(false);
    }
  };

  useEffect(() => {
    console.log(formError);
    if (Object.keys(formError).length === 0 && isSubmit) {
      console.log("inside use effect");
    }
  }, [formError]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newobj = { ...objForm };
    setRecords([...records, newobj]);
    setFormError(validate(objForm));
    setIsSubmit(true);
    navigate("/customerdata", { state: objForm });
    // history.push({ pathname: "/customerdata", state: objForm });
  };

  const validate = (v) => {
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    const errors = {};
    if (!v.Name) {
      errors.Name = "Name is required";
    }
    if (!v.Email) {
      errors.Email = "Email is required";
    } else if (!regex.test(v.Email)) {
      errors.Email = "Email is not in format";
    }
    if (!v.Age) {
      errors.Age = "Age is required";
    }
    if (!v.Password) {
      errors.Password = "Password is required";
      console.log(v.Password);
    } else if (v.Password.length < 5) {
      errors.Password = "Password is less then 4 char";
    } else if (v.Password.length > 20) {
      errors.Password = "Password is greater then 20 char";
    }
    return errors;
  };
  return (
    <div className="main">
      <Link to="/">home</Link>
      <Link style={{ paddingLeft: "10px" }} to="/customerdata">
        Customer Data
      </Link>
      <Routes>
        <Route exact path="/" Component={GetTime}></Route>
        <Route exact path="/customerdata" Component={CustData}></Route>
      </Routes>
      {/*<Routes> <Route path="/" element={<GetTime></GetTime>}></Route>
      <Route
        path="/customerdata"
        element={<CustData custobj={records}></CustData>}
      ></Route> </Routes>*/}

      {
        Object.keys(formError).length === 0 && isSubmit ? (
          <div>SIGNED IN SUCESSFULLY</div>
        ) : (
          <div>SIGN IN REQUIRED</div>
        )
        // (
        //   <pre>{JSON.stringify(objForm, undefined, 2)}</pre>
        // )
      }

      <form onSubmit={handleSubmit} className="form1">
        <div>Name:</div>
        <input
          type="text"
          name="Name"
          id="Name"
          value={objForm.Name}
          placeholder="Your Name"
          onChange={handleInput}
        ></input>
        <p style={{ color: "red" }}>{formError.Name}</p>
        <div>Password:</div>
        <input
          type="password"
          name="Password"
          id="Password"
          value={objForm.Password}
          placeholder="Your Password"
          onChange={handleInput}
        ></input>
        <p style={{ color: "red" }}>{formError.Password}</p>
        <div>Age:</div>
        <input
          type="text"
          name="Age"
          id="Age"
          value={objForm.Age}
          placeholder="Your Age"
          onChange={handleInput}
        ></input>
        <p style={{ color: "red" }}>{formError.Age}</p>
        {isvisible && (
          <div>
            <div>Email:</div>
            <input
              type="text"
              name="Email"
              id="Email"
              value={objForm.Email}
              placeholder="Your Email"
              onChange={handleInput}
            ></input>
            <p style={{ color: "red" }}>{formError.Email}</p>
          </div>
        )}
        <button className="btn">SUBMIT</button>
      </form>
      <p>{`your name is ${objForm.Name} and age is ${objForm.Age} .`}</p>
      <div>
        {records.map((ele) => {
          return (
            <div key={ele.Age}>
              <p>{ele.Name}</p>
              <p>{ele.Age}</p>
            </div>
          );
        })}
      </div>
      <div>
        {records.map((c) => {
          return (
            <p key={c.toString()}>
              {c.Name},{c.Age},{c.Password},{c.Email}
            </p>
          );
        })}
        <hr></hr>
      </div>
    </div>
  );
};

export default AgeForm;
