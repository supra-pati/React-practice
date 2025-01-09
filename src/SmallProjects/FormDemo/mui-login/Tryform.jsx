import { Button, FormHelperText, Grid, Paper, TextField } from "@mui/material";
import { Form, Field, Formik, ErrorMessage } from "formik";
import { useEffect } from "react";
import * as Yup from "yup";

const Tryform = () => {
  const initialValues = {
    name: "",
    email: "",
    phoneNo: "",
    password: "",
  };
  const onSubmitHandler = (values, props) => {
    console.log(values);
    console.log(props);
  };

  const validationSchema = Yup.object({
    name: Yup.string().required(),
    email: Yup.string().email(),
    phoneNo: Yup.number().typeError(),
    password: Yup.string()
      .required("required")
      .matches(/[a-z][A-Z]/, " lower/upper case")
      .min(3, "min 3"),
  });

  //   useEffect(() => {
  //     console.log("render useeffect()");
  //   }, [initialValues.name]);

  return (
    <>
      <Grid align="center">
        <Paper
          style={{
            alignContent: "center",
            width: 250,
            height: 400,
            margin: " auto",
          }}
        >
          <h3>Register Form</h3>
          <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmitHandler}
          >
            {(props) => (
              <Form style={{ margin: 15 }}>
                {console.log(props)}
                <Field
                  as={TextField} // Field as={TextField}= whatever we fill in formfield we can find in on submit of form.
                  name="name"
                  label="Name"
                  variant="filled"
                  error={props.errors.name}
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="name"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="email"
                  label="Email"
                  variant="filled"
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="email"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="phoneNo"
                  label="Phone number"
                  variant="filled"
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="phoneNo"></ErrorMessage>
                </FormHelperText>
                <Field
                  as={TextField}
                  name="password"
                  label="Password"
                  variant="filled"
                  type="password"
                />
                <FormHelperText sx={{ color: "red" }}>
                  <ErrorMessage name="password"></ErrorMessage>
                </FormHelperText>
                <Button type="submit" variant="contained">
                  Register
                </Button>
              </Form>
            )}
          </Formik>
        </Paper>
      </Grid>
    </>
  );
};
export default Tryform;
