import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyles from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      <div className={HeaderStyles.container}>
        <a className={HeaderStyles.link}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-default">Конструктор</p>
        </a>
        <a className={HeaderStyles.link}>
          <ListIcon type="primary" />
          <p className="text text_type_main-default text_color_inactive">Лента заказов</p>
        </a>
      </div>

      <Logo />
      <div className={HeaderStyles.acount}>
        <a className={HeaderStyles.link}>
          <ProfileIcon type="primary" />
          <p className="text text_type_main-default text_color_inactive">Личный кабинет</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
