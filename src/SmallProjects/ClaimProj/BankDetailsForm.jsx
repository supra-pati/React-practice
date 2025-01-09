// src/BankDetailsForm.js
import React from "react";
import { Formik, Form, Field } from "formik";
import { TextField, Button } from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  bankName: Yup.string().required("Required"),
  accountNumber: Yup.string()
    .required("Required")
    .matches(/^\d+$/, "Account number must be numeric"),
});

const BankDetailsForm = () => (
  <Formik
    initialValues={{ bankName: "", accountNumber: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ errors, touched }) => (
      <Form>
        <Field
          as={TextField}
          name="bankName"
          label="Bank Name"
          error={touched.bankName && !!errors.bankName}
          helperText={touched.bankName && errors.bankName}
        />
        <Field
          as={TextField}
          name="accountNumber"
          label="Account Number"
          error={touched.accountNumber && !!errors.accountNumber}
          helperText={touched.accountNumber && errors.accountNumber}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default BankDetailsForm;
