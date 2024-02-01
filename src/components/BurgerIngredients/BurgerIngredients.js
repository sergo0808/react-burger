import React from "react";
import BurgerIngredientsStyle from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import IngredientDetails from "../IngredientDetails/IngredientDetails";
import Modal from "../Modal/Modal";

const BurgerIngredients = ({
  ingredients,
  onOpenDetails,
  onSelectCard,
  isOpenDetails,
  onClose,
  selectCard,
}) => {
  const [current, setCurrent] = React.useState("Булки");
  const buns = ingredients.filter((item) => item.type === "bun");
  const sauces = ingredients.filter((item) => item.type === "sauce");
  const mains = ingredients.filter((item) => item.type === "main");

  return (
    <section className={BurgerIngredientsStyle.burgerIngridients}>
      <h2 className={`"text text_type_main-large title" ${BurgerIngredientsStyle.title}`}>
        Соберите бургер
      </h2>
      <div style={{ display: "flex" }} className="mb-10">
        <Tab value="Булки" active={current === "Булки"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="Соусы" active={current === "Соусы"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="Начинки" active={current === "Начинки"} onClick={setCurrent}>
          Начинки
        </Tab>
      </div>
      <ul className={BurgerIngredientsStyle.burgerLists}>
        <li className={BurgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium mb-6">Булки</h2>
          <div className={BurgerIngredientsStyle.cardsLists}>
            {buns &&
              buns.map((bun) => (
                <Card
                  key={bun._id}
                  onSelectCard={onSelectCard}
                  card={bun}
                  image={bun.image}
                  name={bun.name}
                  price={bun.price}
                  onOpenDetails={onOpenDetails}
                />
              ))}
          </div>
        </li>

        <li className={BurgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <div className={BurgerIngredientsStyle.cardsLists}>
            {sauces &&
              sauces.map((sauce) => (
                <Card
                  key={sauce._id}
                  onSelectCard={onSelectCard}
                  card={sauce}
                  image={sauce.image}
                  name={sauce.name}
                  price={sauce.price}
                  onOpenDetails={onOpenDetails}
                />
              ))}
          </div>
        </li>
        <li className={BurgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium mb-6">Начинки</h2>
          <div className={BurgerIngredientsStyle.cardsLists}>
            {mains &&
              mains.map((main) => (
                <Card
                  key={main._id}
                  onSelectCard={onSelectCard}
                  card={main}
                  image={main.image}
                  name={main.name}
                  price={main.price}
                  onOpenDetails={onOpenDetails}
                />
              ))}
          </div>
        </li>
      </ul>
      {isOpenDetails && (
        <Modal title="Детали ингредиента" onClose={onClose}>
          <IngredientDetails selectCard={selectCard} />
        </Modal>
      )}
    </section>
  );
};
BurgerIngredients.propTypes = {
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
};

export default BurgerIngredients;
