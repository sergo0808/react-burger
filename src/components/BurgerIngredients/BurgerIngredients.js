import React from "react";
import PropTypes from "prop-types";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import Modal from "../Modal/Modal";
import { useState } from "react";
import IngredientDetails from "../IngredientDetails/IngredientDetails";

const BurgerIngredients = ({ data }) => {
  const [current, setCurrent] = React.useState("one");
  const [isModalePopupOpen, setIsModalePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState(null);

  const buns = data.filter((item) => item.type === "bun");
  const mains = data.filter((item) => item.type === "main");
  const sauces = data.filter((item) => item.type === "sauce");

  return (
    <section className={BurgerIngredientsStyles.section}>
      <h2 className={`${BurgerIngredientsStyles.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <nav className={BurgerIngredientsStyles.nav}>
        <Tab value="buns" active={current === "buns"} onClick={setCurrent}>
          Булки
        </Tab>
        <Tab value="sauces" active={current === "sauces"} onClick={setCurrent}>
          Соусы
        </Tab>
        <Tab value="mains" active={current === "mains"} onClick={setCurrent}>
          Начинки
        </Tab>
      </nav>
      <ul className={BurgerIngredientsStyles.lists}>
        <li className={BurgerIngredientsStyles.list}>
          <h3 className="text text_type_main-medium mb-6">Булки</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {buns.map((item) => (
              <div
                className={BurgerIngredientsStyles.burger}
                key={item._id}
                onClick={() => {
                  setIsModalePopupOpen(true);
                  setSelectedCard(item);
                }}>
                <Counter count={1} size="default" />
                <img
                  className={BurgerIngredientsStyles.burgerImage}
                  alt="бургер картинка"
                  src={item.image}
                />
                <div className={BurgerIngredientsStyles.priceGroup}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </li>
        <li>
          <h3 className="text text_type_main-medium mb-6">Соусы</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {sauces.map((item) => (
              <div
                className={BurgerIngredientsStyles.burger}
                key={item._id}
                card={item}
                onClick={() => {
                  setIsModalePopupOpen(true);
                  setSelectedCard(item);
                }}>
                <img
                  className={BurgerIngredientsStyles.burgerImage}
                  alt="бургер картинка"
                  src={item.image}
                />
                <div className={BurgerIngredientsStyles.priceGroup}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </li>
        <li>
          <h3 className="text text_type_main-medium mb-6">Начинки</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {mains.map((item) => (
              <div
                className={BurgerIngredientsStyles.burger}
                key={item._id}
                card={item}
                onClick={() => {
                  setIsModalePopupOpen(true);
                  setSelectedCard(item);
                }}>
                <img
                  className={BurgerIngredientsStyles.burgerImage}
                  alt="бургер картинка"
                  src={item.image}
                />
                <div className={BurgerIngredientsStyles.priceGroup}>
                  <p className="text text_type_digits-default">{item.price}</p>
                  <CurrencyIcon type="primary" />
                </div>
                <p className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                  {item.name}
                </p>
              </div>
            ))}
          </div>
        </li>
      </ul>
      <Modal isOpen={isModalePopupOpen} onClose={() => setIsModalePopupOpen(false)}>
        <IngredientDetails title={"Детали ингредиента"} card={selectedCard} />
      </Modal>
    </section>
  );
};

BurgerIngredients.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
};

export default BurgerIngredients;
