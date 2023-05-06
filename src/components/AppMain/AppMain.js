import PropTypes from "prop-types";
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

AppMain.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default AppMain;
