import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: {
    name: "",
    email: "",
    password: "",
  },
  errors: {},
  isSubmitting: false,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    updateField: (state, action) => {
      const { field, value } = action.payload;
      state.formData[field] = value;
    },
    setErrors: (state, action) => {
      state.errors = action.payload;
    },
    setSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    resetForm: (state) => {
      state.formData = initialState.formData;
      state.errors = {};
      state.isSubmitting = false;
    },
  },
});

export const { updateField, setErrors, setSubmitting, resetForm } =
  formSlice.actions;
export default formSlice.reducer;
