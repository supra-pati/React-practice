import { useState } from "react";
import "./Form2App.css";

const Form2App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setError] = useState({});

  const isValidEmail = (email) => {
    const emailRegex = /^\S+@\S+\.\S+$/;
    return emailRegex.test(email);
  };
  const isValidPhoneNumber = (phoneNo) => {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phoneNo);
  };
  const validateForm = () => {
    let newErrors = {};
    if (!formData.firstName) {
      newErrors.firstName = "firstname required";
    }
    if (!formData.lastName) {
      newErrors.lastName = "lastName required";
    }

    if (!formData.email) {
      newErrors.email = "email required";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Invalid email format";
    }

    if (!formData.phoneNo) {
      newErrors.phoneNo = "phoneNo required";
    } else if (!isValidPhoneNumber(formData.phoneNo)) {
      newErrors.phoneNo = "Invalid phone format";
    }

    setError(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = validateForm();
    if (isValid) {
      console.log("form submitted " + formData);
    } else {
      console.log("form validation failed ");
    }
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedinterests = [...formData.interests];
    if (checked) {
      updatedinterests.push(name);
    } else {
      updatedinterests.filter((interest) => {
        return interest !== name;
      });
    }
    setFormData({
      ...formData,
      interests: updatedinterests,
    });
  };
  return (
    <>
      <div>form-2-App with normal validation</div>
      <hr></hr>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={formData.firstName}
            placeholder="your first name"
            onChange={handleChange}
          />
          {errors.firstName && <div className="error"> {errors.firstName}</div>}
        </div>
        <div>
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={formData.lastName}
            placeholder="your last name"
            onChange={handleChange}
          />
          {errors.lastName && <div className="error"> {errors.lastName}</div>}
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="your email ID"
            onChange={handleChange}
          />
          {errors.email && <div className="error"> {errors.email}</div>}
        </div>
        <div>
          <label>Phone Number:</label>
          <input
            type="number"
            name="phoneNo"
            value={formData.phoneNo}
            placeholder="your phone Number"
            onChange={handleChange}
          />
          {errors.phoneNo && <div className="error"> {errors.phoneNo}</div>}
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            placeholder="your password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            placeholder="your confirm password"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Age:</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            placeholder="your Age"
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div>
          <label>Interest:</label>
          <label>
            <input
              type="checkbox"
              name="coding"
              checked={formData.interests.includes("coding")}
              onChange={handleCheckboxChange}
            />
            Coding
          </label>
          <label>
            <input
              type="checkbox"
              name="sports"
              checked={formData.interests.includes("sports")}
              onChange={handleCheckboxChange}
            />
            Sports
          </label>
          <label>
            <input
              type="checkbox"
              name="reading"
              checked={formData.interests.includes("reading")}
              onChange={handleCheckboxChange}
            />
            Reading
          </label>
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            placeholder="your DOB.."
            onChange={handleChange}
          ></input>
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form2App;
