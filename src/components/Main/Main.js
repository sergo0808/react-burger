import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import MainStyles from "./Main.module.css";

const Main = ({ ingridients, onOpenOrder, onOpenDetails, onSelectCard }) => {
  return (
    <main className={MainStyles.main}>
      <BurgerIngredients
        ingridients={ingridients}
        onSelectCard={onSelectCard}
        onOpenDetails={onOpenDetails}
      />
      <BurgerConstructor ingridients={ingridients} onOpenOrder={onOpenOrder} />
    </main>
  );
};

Main.propTypes = {
  ingridients: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
    })
  ),
  onOpenDetails: PropTypes.func,
  onSelectCard: PropTypes.func,
  onOpenOrder: PropTypes.func,
};

export default Main;
