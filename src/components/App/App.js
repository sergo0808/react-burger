import React from "react";
import AppStyles from "./App.module.css";
import Header from "../Header/Header";

const App = () => {
  return (
    <div className={AppStyles.app}>
      <Header />
    </div>
  );
};

export default App;
