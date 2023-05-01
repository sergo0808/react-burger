import React from "react";
import PropTypes from "prop-types";
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import { data } from "../../utils/data";
import Subtract from "../../images/Subtract.svg";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

const firstCard = data[0];
const defaultCard = data.slice(1, -1);
const lastCard = data.slice(-1);

const BurgerConstructor = () => {
  console.log(lastCard);
  return (
    <section className={BurgerConstructorStyles.section}>
      <div className={`${BurgerConstructorStyles.list} ml-8 mb-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={firstCard.name + " (верх)"}
          price={firstCard.price}
          thumbnail={firstCard.image}
        />
      </div>

      <ul className={BurgerConstructorStyles.lists}>
        {defaultCard.map((item, i, arr) => (
          <li className={BurgerConstructorStyles.list} key={item._id}>
            <DragIcon />
            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
          </li>
        ))}
      </ul>
      <div className={`${BurgerConstructorStyles.list} mb-10`}>
        <DragIcon />
        {lastCard.map((item) => (
          <ConstructorElement
            type="bottom"
            isLocked={true}
            text={item.name + " (низ)"}
            price={item.price}
            thumbnail={item.image}
          />
        ))}
      </div>
      <div className={BurgerConstructorStyles.info}>
        <div className={BurgerConstructorStyles.priceGroup}>
          <p className="text text_type_digits-medium">610</p>
          <img src={Subtract} alt="картинка кристала" />
        </div>
        <Button htmlType="button" type="primary" size="large">
          Оформить заказ
        </Button>
      </div>
    </section>
  );
};

BurgerConstructor.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
};

export default BurgerConstructor;
