import { createSlice } from "@reduxjs/toolkit";
import "../ReduxDemoStyle.css";

const initialState = {
  users: ["admin", "manager", "end-user"],
  loginDet: "None",
};

const loginSlice = createSlice({
  name: "log",
  initialState,
  reducers: {
    userLogin: (state, action) => {
      state.loginDet = action.payload;
    },
  },
});

export const { userLogin } = loginSlice.actions;
export default loginSlice.reducer;
// console.log("hi..");
