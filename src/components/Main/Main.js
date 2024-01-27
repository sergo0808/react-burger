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
  data: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    price: PropTypes.number,
    _id: PropTypes.string,
  }),
  onOpenDetails: PropTypes.func,
  onSelectCard: PropTypes.func,
  onOpenOrder: PropTypes.func,
};

export default Main;
