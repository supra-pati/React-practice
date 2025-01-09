import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  firstName: Yup.string().required("Required"),
  lastName: Yup.string().required("Required"),
});

const CustomerDetailsForm = () => (
  <Formik
    initialValues={{ firstName: "", lastName: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          as={TextField}
          name="firstName"
          label="First Name"
          fullWidth
          error={touched.firstName && !!errors.firstName}
          helperText={touched.firstName && errors.firstName}
        />
        <Field
          as={TextField}
          name="lastName"
          label="Last Name"
          fullWidth
          error={touched.lastName && !!errors.lastName}
          helperText={touched.lastName && errors.lastName}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default CustomerDetailsForm;
