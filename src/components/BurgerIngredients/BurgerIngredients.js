import React from "react";
import PropTypes from "prop-types";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";

import { data } from "../../utils/data";

const BurgerIngredients = () => {
  return (
    <section className={BurgerIngredientsStyles.section}>
      <h2 className={`${BurgerIngredientsStyles.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <nav className={BurgerIngredientsStyles.nav}>
        <Tab value="one">Булки</Tab>
        <Tab value="two">Соусы</Tab>
        <Tab value="three">Начинки</Tab>
      </nav>
      <ul className={BurgerIngredientsStyles.lists}>
        <li className={BurgerIngredientsStyles.list}>
          <h3 className="text text_type_main-medium mb-6">Булки</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {data
              .filter((item) => item.type === "bun")
              .map((item) => (
                <div className={BurgerIngredientsStyles.burger} key={item._id}>
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
                  <p
                    className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                    {item.name}
                  </p>
                </div>
              ))}
          </div>
        </li>
        <li>
          <h3 className="text text_type_main-medium mb-6">Соусы</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {data
              .filter((item) => item.type === "sauce")
              .map((item) => (
                <div className={BurgerIngredientsStyles.burger} key={item._id}>
                  <img
                    className={BurgerIngredientsStyles.burgerImage}
                    alt="бургер картинка"
                    src={item.image}
                  />
                  <div className={BurgerIngredientsStyles.priceGroup}>
                    <p className="text text_type_digits-default">{item.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                    {item.name}
                  </p>
                </div>
              ))}
          </div>
        </li>
        <li>
          <h3 className="text text_type_main-medium mb-6">Начинки</h3>
          <div className={BurgerIngredientsStyles.burgerContainer}>
            {data
              .filter((item) => item.type === "main")
              .map((item) => (
                <div className={BurgerIngredientsStyles.burger} key={item._id}>
                  <img
                    className={BurgerIngredientsStyles.burgerImage}
                    alt="бургер картинка"
                    src={item.image}
                  />
                  <div className={BurgerIngredientsStyles.priceGroup}>
                    <p className="text text_type_digits-default">{item.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p
                    className={`${BurgerIngredientsStyles.burgerName} text text_type_main-default`}>
                    {item.name}
                  </p>
                </div>
              ))}
          </div>
        </li>
      </ul>
    </section>
  );
};

BurgerIngredients.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
};

export default BurgerIngredients;
