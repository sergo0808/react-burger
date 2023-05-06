import { Routes, Route, NavLink } from "react-router-dom";
import AppHeaderStyles from "./Appheader.module.css";
import {
  Logo,
  BurgerIcon,
  ListIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

const AppHeader = () => {
  return (
    <>
      <header className={AppHeaderStyles.header}>
        <ul className={AppHeaderStyles.list_links}>
          <NavLink to="/" className={`${AppHeaderStyles.link} p-4`}>
            <BurgerIcon></BurgerIcon>
            <p className="text text_type_main-default">Конструктор</p>
          </NavLink>
          <NavLink to="/constructor" className={`${AppHeaderStyles.link} p-4`}>
            <ListIcon></ListIcon>
            <p className="text text_type_main-default">Лента заказов</p>
          </NavLink>
        </ul>
        <div className={AppHeaderStyles.logo}>
          <Logo />
        </div>
        <NavLink to="/profile" className={`${AppHeaderStyles.link} p-4`}>
          <ProfileIcon></ProfileIcon>
          <p className="text text_type_main-default">Личный кабинет</p>
        </NavLink>
      </header>
      <Routes>
        <Route path="/"></Route>
      </Routes>
    </>
  );
};

export default AppHeader;
