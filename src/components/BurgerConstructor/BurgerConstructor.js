import React, { useContext } from "react";
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import PropTypes from "prop-types";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import culon from "../../images/culon.png";
import Modal from "../Modal/Modal";
import OrderDetails from "../OrderDetails/OrderDetails";
import { ConstrucrtorContext } from "../../services/ConstrucrtorContext";
import { SummaContext } from "../../services/SummaContext";

const BurgerConstructor = ({ onOpenOrder, isOpenOrder, onClose, onCreateOrders }) => {
  const ingredients = useContext(ConstrucrtorContext);
  const mains = ingredients.filter((item) => item.type === "main");
  const burger = ingredients.find((item) => item.name === "Краторная булка N-200i");
  const totalPrice =
    mains.map((item) => item.price).reduce((acc, curr) => acc + curr, 0) + burger.price * 2;

  const handleClick = () => {
    onOpenOrder();
    onCreateOrders(mains);
  };

  return (
    <section className={BurgerConstructorStyles.burgerConstructor}>
      <div className={BurgerConstructorStyles.container}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={`${burger.name} (верх)`}
          price={burger.price}
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
          text={`${burger.name} (низ)`}
          price={burger.price}
          thumbnail={burger.image}
        />
      </div>
      <div className={BurgerConstructorStyles.priceGroup}>
        <p className="text text_type_digits-medium">{totalPrice}</p>
        <img src={culon} alt="Кулон" className={BurgerConstructorStyles.culon}></img>
        <Button htmlType="button" type="primary" size="large" onClick={handleClick}>
          Оформить заказ
        </Button>
      </div>
      {isOpenOrder && (
        <Modal onClose={onClose}>
          <SummaContext.Provider value={totalPrice}>
            <OrderDetails />
          </SummaContext.Provider>
        </Modal>
      )}
    </section>
  );
};

BurgerConstructor.propTypes = {
  ingridients: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string,
      name: PropTypes.string,
      price: PropTypes.number,
      _id: PropTypes.string,
    })
  ),
  onOpenOrder: PropTypes.func,
};

export default BurgerConstructor;
