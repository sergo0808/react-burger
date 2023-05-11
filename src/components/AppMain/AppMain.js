import PropTypes from "prop-types";
import { useReducer } from "react";
import AppMainStyles from "./AppMain.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { ingredientPropTypes } from "../../utils/types";
import { burgerContext } from "../context/burgerContext";

const AppMain = ({ data }) => {
  const burger = data;

  return (
    <main className={AppMainStyles.main}>
      {data.length && (
        <>
          <BurgerIngredients data={data} />
          <burgerContext.Provider value={burger}>
            <BurgerConstructor />
          </burgerContext.Provider>
        </>
      )}
    </main>
  );
};

AppMain.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default AppMain;
