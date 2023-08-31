import React from "react";
import "./App.css";
import Icons from "./components/Icons";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Button from "./components/Button";
import Main from "./components/Main";

const App = () => {
  return (
    <div>
      <Navbar />
      <Header />
      <Main />
    </div>
  );
};

export default App;
