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

const BurgerConstructor = () => {
  return (
    <section className={BurgerConstructorStyles.section}>
      <ul className={BurgerConstructorStyles.lists}>
        {data.map((item, i, arr) => (
          <li className={BurgerConstructorStyles.list} key={item._id}>
            <DragIcon />
            <ConstructorElement
              type={i === 0 ? "top" : i === arr.length - 1 ? "bottom" : ""}
              text={item.name}
              price={item.price}
              thumbnail={item.image}
            />
          </li>
        ))}
      </ul>
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

BurgerConstructorStyles.propTypes = {
  _id: PropTypes.number,
  name: PropTypes.string,
};

export default BurgerConstructor;
