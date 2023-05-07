import PropTypes from "prop-types";
import AppMainStyles from "./AppMain.module.css";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import { ingredientPropTypes } from "../../utils/types";

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

AppMain.propTypes = {
  data: PropTypes.arrayOf(ingredientPropTypes).isRequired,
};

export default AppMain;
