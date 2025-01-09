import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Stopwatch from "./components/Stopwatch";
import Timer from "./components/Timer";
import "./ProjApp.css";

const ProjApp = () => {
  return (
    <React.Fragment className="App">
      <BrowserRouter>
        <Header>
          <div className="container">
            <Routes>
              <Route path="/" exact Component={Stopwatch}></Route>
              <Route path="/timer" Component={Timer}></Route>
            </Routes>
          </div>
        </Header>
      </BrowserRouter>
    </React.Fragment>
  );
};
export default ProjApp;
