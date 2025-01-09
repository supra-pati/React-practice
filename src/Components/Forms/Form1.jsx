import { useState } from "react";
// import './sty.css'

const Form1 = () => {
  const [fullName, setFullName] = useState({
    fname: "",
    lname: "",
  });

  const clickHandler = (e) => {
    console.log(e.target.value);
    console.log(fullName.fname + "---" + fullName.lname);
  };
  const changeName = (e) => {
    const newValue = e.target.value;
    const newname = e.target.name;
    setFullName((prevValue) => {
      if (newname === "fName") {
        return {
          fname: newValue,
          lname: prevValue.lname,
        };
      } else if (newname === "lName") {
        return {
          fname: prevValue.fname,
          lname: newValue,
        };
      }
    });

    console.log("inside changename");
  };

  return (
    <div className="container">
      <h1>
        Hello {fullName.fname} {fullName.lname}
      </h1>
      <form>
        <input
          name="fName"
          placeholder="First Name"
          onChange={changeName}
          value={fullName.fname}
        />
        <input
          name="lName"
          placeholder="Last Name"
          onChange={changeName}
          value={fullName.lname}
        />
        <button onClick={clickHandler}>Submit</button>
      </form>
    </div>
  );
};

export default Form1;
