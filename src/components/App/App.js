import React from "react";
import AppStyles from "./App.module.css";
import Header from "../Header/Header";
import Main from "../Main/Main";

const App = () => {
  return (
    <div className={AppStyles.app}>
      <Header />
      <Main />
    </div>
  );
};

export default App;
