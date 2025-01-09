import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
// import Store from "./ReactReduxMUI_MovieProj/redux/Store";
// import Estore from "./SmallProjects/ProjectEcom/redux/Ecom_store";

import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Components/Redux-practice/ReduxDemoCart/store/productSlice";
import loginSlice from "./Components/Redux-practice/ReduxDemoCart/store/loginSlice";

const ReduxDemoStore = configureStore({
  reducer: {
    ps: productSlice,
    ls: loginSlice,
  },
});
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <Provider store={Store}>
      <App />
    </Provider> */}

    <BrowserRouter>
      <Provider store={ReduxDemoStore}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
