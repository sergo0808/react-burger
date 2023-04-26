import React from "react";
import BurgerIngredientsStyles from "./BurgerIngredients.module.css";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerIngredients = () => {
  return (
    <article className={BurgerIngredientsStyles.container}>
      <h2 className={`${BurgerIngredientsStyles.title} text text_type_main-large`}>
        Соберите бургер
      </h2>
      <nav className={BurgerIngredientsStyles.nav}>
        <Tab value="one">Булки</Tab>
        <Tab value="two">Соусы</Tab>
        <Tab value="three">Начинки</Tab>
      </nav>
      <ul>
        <li>
          <h3 className="text text_type_main-medium">Булки</h3>
        </li>
        <li>
          <h3 className="text text_type_main-medium">Соусы</h3>
        </li>
        <li>
          <h3 className="text text_type_main-medium">Начинки</h3>
        </li>
      </ul>
    </article>
  );
};

export default BurgerIngredients;
