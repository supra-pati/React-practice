// src/AcknowledgmentForm.js
import React from "react";
import { Formik, Form, Field } from "formik";
import {
  Checkbox,
  TextField,
  FormGroup,
  FormControlLabel,
  Button,
} from "@mui/material";
import * as Yup from "yup";

const validationSchema = Yup.object({
  acknowledged: Yup.boolean().oneOf([true], "You must acknowledge the terms"),
  signature: Yup.string().required("Signature is required"),
});

const AcknowledgmentForm = () => (
  <Formik
    initialValues={{ acknowledged: false, signature: "" }}
    validationSchema={validationSchema}
    onSubmit={(values) => {
      console.log(values);
    }}
  >
    {({ errors, touched, values, setFieldValue }) => (
      <Form>
        <FormGroup>
          <FormControlLabel
            control={
              <Field
                as={Checkbox}
                name="acknowledged"
                checked={values.acknowledged}
                onChange={() =>
                  setFieldValue("acknowledged", !values.acknowledged)
                }
              />
            }
            label="I acknowledge that the provided information is correct."
          />
          {touched.acknowledged && errors.acknowledged && (
            <div>{errors.acknowledged}</div>
          )}
        </FormGroup>
        <Field
          as={TextField}
          name="signature"
          label="Signature"
          error={touched.signature && !!errors.signature}
          helperText={touched.signature && errors.signature}
        />
        <Button variant="contained" type="submit">
          Submit
        </Button>
      </Form>
    )}
  </Formik>
);

export default AcknowledgmentForm;
