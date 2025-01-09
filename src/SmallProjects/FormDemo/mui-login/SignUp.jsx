import {
  Avatar,
  Grid,
  Paper,
  TextField,
  FormLabel,
  FormControlLabel,
  Radio,
  RadioGroup,
  Checkbox,
  Button,
  Typography,
  FormHelperText,
} from "@mui/material";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import "./FormMuiApp.css";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";

const SignUp = () => {
  const avatarStyle = { backgroundColor: "#00af5a" };
  const initialFormValues = {
    name: "",
    email: "",
    gender: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
    termsAndConditions: false,
  };

  const onSubmitHandler = (values, props) => {
    console.log(values);
    console.log(props);
    setTimeout(() => {
      props.resetForm();
      props.setSubmitting(false);
    }, 2000);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "min charecter is 3")
      .required("name is required"),
    email: Yup.string().email("invalid email ID").required("Email is required"),
    gender: Yup.string()
      .oneOf(["female", "male", "other"])
      .required("gender is required"),
    phoneNumber: Yup.string()
      .typeError("enter a valid phone number")
      .matches(/^\d{10}$/, "must 10 digit")
      .required("Phone no is required"),
    password: Yup.string()
      .min(6)
      .matches(/[!@#$%^&*(),.?":{}|<>]/, "must contain symbol")
      .matches(/[0-9]/, "atleast 1 number")
      .matches(/[a-z]/, "atleast 1 lower case")
      .matches(/[A-Z]/, "atleast 1 upper case")
      .required("password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password")], "password not matched")
      .required("same as password is required"),
    termsAndConditions: Yup.string().oneOf(["true"], "mark to proceed"),
  });

  return (
    <>
      <Grid>
        <Paper elevation={10} className="paperStyle">
          <Grid align="center">
            <Avatar style={avatarStyle}>
              <LockOpenOutlinedIcon />
            </Avatar>
            <h2 style={{ margin: 0 }}>Sign Up</h2>
            <Typography>Please fill to create an account..</Typography>
          </Grid>
          <Formik
            initialValues={initialFormValues}
            onSubmit={onSubmitHandler}
            validationSchema={validationSchema}
          >
            {(props) => (
              <Form>
                <Field
                  as={TextField}
                  name="name"
                  label="Username"
                  variant="standard"
                  placeholder="Enter your Name"
                  error={props.errors.name}
                  fullWidth
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="name"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="standard"
                  placeholder="Enter your Email"
                  fullWidth
                  error={props.errors.email}
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="email"></ErrorMessage>
                </FormHelperText>
                <FormLabel style={{ paddingTop: 10 }}>Gender</FormLabel>
                <Field as={RadioGroup} name="gender" row>
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="Female"
                  />
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="Male"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="Other"
                  />
                </Field>
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="gender"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="phoneNumber"
                  label="Phone Number"
                  variant="standard"
                  placeholder="Enter your Phone Number"
                  fullWidth
                  error={props.errors.phoneNumber}
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="phoneNumber"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  variant="standard"
                  placeholder="Enter your Password"
                  type="password"
                  // required
                  fullWidth
                  error={props.errors.password}
                />
                <Field
                  as={TextField}
                  name="confirmPassword"
                  label="Confirm Password"
                  variant="standard"
                  placeholder="Enter your Confirm Password"
                  type="password"
                  error={props.errors.confirmPassword}
                  fullWidth
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="confirmPassword"></ErrorMessage>
                </FormHelperText>
                <FormControlLabel
                  control={<Field as={Checkbox} name="termsAndConditions" />}
                  label="I accept the terms & conditions"
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="termsAndConditions"></ErrorMessage>
                </FormHelperText>
                <Button
                  type="submit"
                  variant="contained"
                  disabled={props.isSubmitting}
                >
                  {props.isSubmitting ? "Loading" : "Sign Up"}
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};
export default SignUp;
