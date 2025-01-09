import { useState } from "react";
import {
  Button,
  Stack,
  TextField,
  InputAdornment,
  IconButton,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const FormApp = () => {
  const [formData, setFormData] = useState({
    name: "",
    age: "",
    phone: "",
    address: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(true);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("custdata1=>  " + formData);
    navigate("/FormApp/detailsPage", { state: { formData } });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    // A helper function to sanitize input for age and phone
    const sanitizeInput = (value, maxLength) => {
      const sanitized = value.replace(/\D/g, "").slice(0, maxLength); // Remove non-digits & Limit to maxLength
      return sanitized;
    };

    // Depending on the field, sanitize and update the state accordingly
    if (name === "age") {
      const sanitizedAge = sanitizeInput(value, 3); // Limit age to 3 digits
      setFormData((prevState) => ({
        ...prevState,
        age: sanitizedAge,
      }));
    } else if (name === "phone") {
      const sanitizedPhone = sanitizeInput(value, 10); // Limit phone to 10 digits
      setFormData((prevState) => ({
        ...prevState,
        phone: sanitizedPhone,
      }));
    } else {
      setFormData((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack
          spacing={0.5}
          border={2}
          direction="column"
          sx={{ marginLeft: "1rem", marginTop: "5rem" }}
        >
          <h1 style={{ color: "burlywood", textAlign: "justify" }}>
            Form page:
          </h1>

          <TextField
            sx={{ width: "20rem" }}
            required
            type="text"
            variant="filled"
            label="Name"
            name="name"
            // value={formData.name}
            InputProps={{
              inputProps: {
                maxLength: 20,
              },
            }}
            onChange={handleChange}
          ></TextField>
          <TextField
            sx={{ width: "20rem" }}
            type="text"
            variant="filled"
            label="Age"
            value={formData.age}
            onChange={handleChange}
            name="age"
            InputProps={{
              inputProps: {
                maxLength: 3,
                pattern: "[0-9]{1,3}",
              },
            }}
          ></TextField>
          <TextField
            type="text"
            variant="filled"
            label="Phone"
            name="phone"
            sx={{ width: "20rem" }}
            onChange={handleChange}
            value={formData.phone}
            InputProps={{
              inputProps: {
                maxLength: 10,
              },
            }}
          ></TextField>
          {formData.age && parseInt(formData.age, 10) < 18 && (
            <TextField
              sx={{ width: "20rem" }}
              label="Password"
              type={showPassword ? "password" : "text"}
              onChange={handleChange}
              name="password"
              variant="filled"
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleClickShowPassword}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          )}
          <TextField
            sx={{ width: "20rem" }}
            type="text"
            variant="filled"
            label="Address"
            name="address"
            onChange={handleChange}
          ></TextField>

          <Button
            sx={{ backgroundColor: "burlywood", width: "20rem" }}
            type="submit"
            variant="contained"
          >
            Submit
          </Button>
        </Stack>
      </form>
    </>
  );
};
export default FormApp;
