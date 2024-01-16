import React from "react";
import {
  BurgerIcon,
  ListIcon,
  Logo,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import HeaderStyle from "./Header.module.css";

const Header = () => {
  return (
    <header className={HeaderStyle.header}>
      <div className={HeaderStyle.container}>
        <a className={HeaderStyle.link}>
          <BurgerIcon type="primary" />
          <p className="text text_type_main-small">Конструктор</p>
        </a>
        <a className={HeaderStyle.link}>
          <ListIcon type="primary" />
          <p className="text text_type_main-small">Лента заказов</p>
        </a>
      </div>

      <Logo />
      <div className={HeaderStyle.acount}>
        <a className={HeaderStyle.link}>
          <ProfileIcon type="primary" />
          <p className="text text_type_main-small">Личный кабинет</p>
        </a>
      </div>
    </header>
  );
};

export default Header;
