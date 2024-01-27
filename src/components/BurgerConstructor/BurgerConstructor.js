import React from "react";
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import culon from "../../images/culon.png";

const BurgerConstructor = ({ data, onOpenOrder }) => {
  const mains = data.data.filter((item) => item.type === "main");
  const burger = data.data.find((item) => item.name === "Краторная булка N-200i");

  return (
    <section className={BurgerConstructorStyles.burgerConstructor}>
      <div className={BurgerConstructorStyles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text="Краторная булка N-200i (верх)"
          price={200}
          thumbnail={burger.image}
        />
      </div>

      <ul className={BurgerConstructorStyles.lists}>
        {mains.map((main) => (
          <li className={BurgerConstructorStyles.cardContainer} key={main._id}>
            <DragIcon />
            <ConstructorElement text={main.name} price={main.price} thumbnail={main.image} />
          </li>
        ))}
      </ul>
      <div className={BurgerConstructorStyles.container}>
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text="Краторная булка N-200i (низ)"
          price={200}
          thumbnail={burger.image}
        />
      </div>
      <div className={BurgerConstructorStyles.priceGroup}>
        <p className="text text_type_digits-medium">610</p>
        <img src={culon} alt="Кулон" className={BurgerConstructorStyles.culon}></img>
        <Button htmlType="button" type="primary" size="large" onClick={onOpenOrder}>
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.shape({
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    _id: PropTypes.string.isRequired,
  }),
  onOpenOrder: PropTypes.func,
};

export default BurgerConstructor;
