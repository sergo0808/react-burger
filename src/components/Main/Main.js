import React from "react";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import MainStyles from "./Main.module.css";

const Main = () => {
  return (
    <main className={MainStyles.main}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};

export default Main;
