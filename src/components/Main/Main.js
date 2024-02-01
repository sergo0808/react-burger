import PropTypes from "prop-types";
import BurgerIngredients from "../BurgerIngredients/BurgerIngredients";
import BurgerConstructor from "../BurgerConstructor/BurgerConstructor";
import MainStyles from "./Main.module.css";
import { ConstrucrtorContext } from "../../services/ConstrucrtorContext";

const Main = ({
  ingredients,
  onOpenOrder,
  onOpenDetails,
  onSelectCard,
  onClose,
  isOpenOrder,
  isOpenDetails,
  selectCard,
  onCreateOrders,
}) => {
  return (
    <main className={MainStyles.main}>
      <BurgerIngredients
        ingredients={ingredients}
        onSelectCard={onSelectCard}
        onOpenDetails={onOpenDetails}
        isOpenDetails={isOpenDetails}
        selectCard={selectCard}
        onClose={onClose}
      />
      <ConstrucrtorContext.Provider value={ingredients}>
        <BurgerConstructor
          onCreateOrders={onCreateOrders}
          ingredients={ingredients}
          onOpenOrder={onOpenOrder}
          onClose={onClose}
          isOpenOrder={isOpenOrder}
        />
      </ConstrucrtorContext.Provider>
    </main>
  );
};

Main.propTypes = {
  ingredients: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      _id: PropTypes.string,
    })
  ),
  onOpenDetails: PropTypes.func,
  onSelectCard: PropTypes.func,
  onOpenOrder: PropTypes.func,
};

export default Main;
