import React from "react";
import AppMainStyles from "./AppMain.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";

const AppMain = ({ data }) => {
  return (
    <main className={AppMainStyles.main}>
      {data.length && (
        <>
          <BurgerIngredients data={data} />
          <BurgerConstructor data={data} />
        </>
      )}
    </main>
  );
};

export default AppMain;
