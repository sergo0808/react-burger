import { useState } from "react";
import PropTypes from "prop-types";
import BurgerConstructorStyles from "./BurgerConstructor.module.css";
import Modal from "../Modal/Modal";

import Subtract from "../../images/Subtract.svg";
import {
  ConstructorElement,
  DragIcon,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";
import OrderDetails from "../OrderDetails/OrderDetails";

const BurgerConstructor = ({ data }) => {
  const firstCard = data[0];
  const defaultCard = data.slice(1, -1);

  const [isModalePopupOpen, setIsModalePopupOpen] = useState(false);

  return (
    <section className={BurgerConstructorStyles.section}>
      <div className={`${BurgerConstructorStyles.list} ml-8 mb-4`}>
        <ConstructorElement
          type="top"
          isLocked={true}
          text={firstCard.name}
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
          <p className="text text_type_digits-medium">610</p>
          <img src={Subtract} alt="картинка кристала" />
        </div>
        <Button
          htmlType="button"
          type="primary"
          size="large"
          onClick={() => {
            setIsModalePopupOpen(true);
          }}>
          Оформить заказ
        </Button>
      </div>
      <Modal isOpen={isModalePopupOpen} onClose={() => setIsModalePopupOpen(false)}>
        <OrderDetails />
      </Modal>
    </section>
  );
};

BurgerConstructor.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default BurgerConstructor;
