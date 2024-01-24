import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import MainStyles from "./Main.module.css";

const Main = ({ data, onOpenOrder, onOpenDetails, onSelectCard }) => {
  return (
    <main className={MainStyles.main}>
      <BurgerIngredients data={data} onSelectCard={onSelectCard} onOpenDetails={onOpenDetails} />
      <BurgerConstructor data={data} onOpenOrder={onOpenOrder} />
    </main>
  );
};

Main.propTypes = {
  data: PropTypes.object,
};

export default Main;
