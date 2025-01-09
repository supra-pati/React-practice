// filepath: /src/components/Form.js
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  updateField,
  setErrors,
  setSubmitting,
  resetForm,
} from "../../features/form/formSlice";

const Form = () => {
  const dispatch = useDispatch();
  const formData = useSelector((state) => state.form.formData);
  const errors = useSelector((state) => state.form.errors);
  const isSubmitting = useSelector((state) => state.form.isSubmitting);

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateField({ field: name, value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setSubmitting(true));

    // Simulate form validation and submission
    setTimeout(() => {
      const newErrors = {};
      if (!formData.name) newErrors.name = "Name is required";
      if (!formData.email) newErrors.email = "Email is required";
      if (!formData.password) newErrors.password = "Password is required";

      if (Object.keys(newErrors).length > 0) {
        dispatch(setErrors(newErrors));
      } else {
        // Submit form data
        console.log("Form submitted:", formData);
        dispatch(resetForm());
      }

      dispatch(setSubmitting(false));
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        {errors.name && <span>{errors.name}</span>}
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        {errors.email && <span>{errors.email}</span>}
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />
        {errors.password && <span>{errors.password}</span>}
      </div>
      <button type="submit" disabled={isSubmitting}>
        Submit
      </button>
    </form>
  );
};

export default Form;
