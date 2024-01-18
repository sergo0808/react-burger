import React from "react";
import BurgerIngredientsStyle from "./BurgerIngredients.module.css";
import { Tab, CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { data } from "../../utils/data";

const BurgerIngredients = () => {
  const [current, setCurrent] = React.useState("Булки");
  const buns = data.filter((item) => item.type === "bun");
  const sauces = data.filter((item) => item.type === "sauce");
  const mains = data.filter((item) => item.type === "main");

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
                <article className={BurgerIngredientsStyle.card}>
                  <Counter count={1} size="default" />
                  <img src={bun.image} alt={bun.name} />
                  <div className={BurgerIngredientsStyle.priceGroup}>
                    <p className="text text_type_digits-default">{bun.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className="text text_type_main-default">{bun.name}</p>
                </article>
              ))}
          </div>
        </li>

        <li className={BurgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium mb-6">Соусы</h2>
          <div className={BurgerIngredientsStyle.cardsLists}>
            {sauces &&
              sauces.map((sauce) => (
                <article className={BurgerIngredientsStyle.card}>
                  <img src={sauce.image} alt={sauce.name} />
                  <div className={BurgerIngredientsStyle.priceGroup}>
                    <p className="text text_type_digits-default">{sauce.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className="text text_type_main-default">{sauce.name}</p>
                </article>
              ))}
          </div>
        </li>
        <li className={BurgerIngredientsStyle.container}>
          <h2 className="text text_type_main-medium mb-6">Начинки</h2>
          <div className={BurgerIngredientsStyle.cardsLists}>
            {mains &&
              mains.map((main) => (
                <article className={BurgerIngredientsStyle.card}>
                  <img src={main.image} alt={main.name} />
                  <div className={BurgerIngredientsStyle.priceGroup}>
                    <p className="text text_type_digits-default">{main.price}</p>
                    <CurrencyIcon type="primary" />
                  </div>
                  <p className="text text_type_main-default">{main.name}</p>
                </article>
              ))}
          </div>
        </li>
      </ul>
    </section>
  );
};

export default BurgerIngredients;
