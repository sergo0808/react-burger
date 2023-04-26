import React from "react";
import AppMainStyles from "./AppMain.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const AppMain = () => {
  return (
    <main className={AppMainStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default AppMain;
