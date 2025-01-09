// import { configureStore } from "@reduxjs/toolkit";
import { createStore } from "redux";
import reducers from "./reducers/index";

const Estore = createStore(
  reducers,
  {},
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// const conf_store = configureStore(reducers, {});// got suggestion that instead of createstore use this

export default Estore;
