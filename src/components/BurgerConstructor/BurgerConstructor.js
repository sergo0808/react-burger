import { useState, useContext, useReducer } from "react";
import PropTypes from "prop-types";
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";
import { ingredientPropTypes } from "../../utils/types";
import { makeAnOrder } from "../../utils/BurgerApi";
import Subtract from "../../images/Subtract.svg";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";
import { burgerContext } from "../context/burgerContext";
import { orderContext } from "../context/orderContext";

const BurgerConstructor = () => {
  const burger = useContext(burgerContext);

  const firstCard = burger[0];
  const defaultCard = burger.slice(1, -1);

  const [numberState, setNumberState] = useState({});

  const totalPrice = burger
    .map((item) => item.price)
    .reduce((sum, current) => {
      return sum + current;
    }, 0);

  const handleOnclick = () => {
    makeAnOrder()
      .then((data) => setNumberState(data.order))
      .catch((err) => {
        console.log(err);
      });
  };

  const [isModalePopupOpen, setIsModalePopupOpen] = useState(false);

  return (
    <section className={BurgerConstructorStyles.section}>
      <div className={`${BurgerConstructorStyles.list} ml-8 mb-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={firstCard.name + " (вверх)"}
          price={firstCard.price}
          thumbnail={firstCard.image}
        />
      </div>

      <ul className={BurgerConstructorStyles.lists}>
        {defaultCard.map((item) => (
          <li className={BurgerConstructorStyles.list} key={item._id}>
            <DragIcon />
            <ConstructorElement text={item.name} price={item.price} thumbnail={item.image} />
          </li>
        ))}
      </ul>
      <div className={`${BurgerConstructorStyles.list} mb-10`}>
        <DragIcon />
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={firstCard.name + " (низ)"}
          price={firstCard.price}
          thumbnail={firstCard.image}
        />
      </div>
      <div className={BurgerConstructorStyles.info}>
        <div className={BurgerConstructorStyles.priceGroup}>
          <p className="text text_type_digits-medium">{totalPrice}</p>
          <img src={Subtract} alt="картинка кристала" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            handleOnclick();
            setIsModalePopupOpen(true);
          }}>
          Оформить заказ
        </Button>
      </div>
      <Modal isOpen={isModalePopupOpen} onClose={() => setIsModalePopupOpen(false)}>
        <orderContext.Provider value={numberState}>
          <OrderDetails />
        </orderContext.Provider>
      </Modal>
    </section>
  );
};

export default BurgerConstructor;
