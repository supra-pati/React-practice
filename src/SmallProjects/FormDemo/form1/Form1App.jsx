import { useState } from "react";
import * as Yup from "yup";
import "../form2/Form2App.css";

const Form1App = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    femail: "",
    phoneNo: "",
    password: "",
    confirmPassword: "",
    age: "",
    gender: "",
    interests: [],
    birthDate: "",
  });

  const [errors, setError] = useState({});

  const validationSchema = Yup.object({
    firstName: Yup.string().required("first name is required"),
    lastName: Yup.string().required("last name is required"),
    femail: Yup.string()
      .required("email is required")
      .email("invalid email ID"),
    phoneNo: Yup.string()
      .matches(/^\d{10}$/, "must 10 digit")
      .typeError("enter a valid phone number"),
    password: Yup.string()
      .min(8)
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "must contain symbol")
      .matches(/[0-9]/, "atleast 1 number")
      .matches(/[a-z]/, "atleast 1 lower case")
      .matches(/[A-Z]/, "atleast 1 upper case")
      .required("required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password not matched")
      .required("same as password is required"),
    age: Yup.number()
      .typeError("must be a number")
      .min(18, "atleat 18")
      .max(100, "atmost 100")
      .required("age is required"),
    gender: Yup.string().required("gender is required"),
    interests: Yup.array().min(1, "atleast 1").required("interest is required"),
    birthDate: Yup.date().required("DOB is required"),
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate(formData, { abortEarly: false });
      console.log("submitted", formData);
    } catch (err) {
      const newError = {};
      err.inner.forEach((er) => {
        newError[er.path] = er.message;
      });
      setError(newError);
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
      <h3>Form1valyup with normal validation</h3>
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
            name="femail"
            value={formData.femail}
            placeholder="your email ID"
            onChange={handleChange}
          />
          {errors.femail && <div className="error"> {errors.femail}</div>}
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
          {errors.password && <div className="error"> {errors.password}</div>}
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
          {errors.confirmPassword && (
            <div className="error"> {errors.confirmPassword}</div>
          )}
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
          {errors.age && <div className="error"> {errors.age}</div>}
        </div>
        <div>
          <label>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange}>
            <option value="">Select</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <div className="error"> {errors.gender}</div>}
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
          {errors.interests && <div className="error"> {errors.interests}</div>}
        </div>
        <div>
          <label>Date of Birth:</label>
          <input
            type="date"
            name="birthDate"
            value={formData.birthDate}
            placeholder="your DOB.."
            onChange={handleChange}
          />
          {errors.birthDate && <div className="error"> {errors.birthDate}</div>}
        </div>
        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </>
  );
};
export default Form1App;
