import { NavLink } from "react-router-dom";
import logo from "../../assets/logo.svg";
import button from "../../assets/button.svg";
import style from "./Header.module.css";
import { Container } from "../Container/ContainerLayout.jsx";

export default function Header() {
  const setActiveClass = ({ isActive }) => isActive ? `${style.header__link} ${style.header__link_active}` : style.header__link;
  
  return (
    <header className={style.header}>
      <Container>
        <nav className={style.header__navigation}>
          <NavLink end to="/zerniatko/" className={style.header__logo}>
            <img className={style.header__icon} src={logo} alt="Logo" />
          </NavLink>
          <ul className={style.header__list}>
            <li className={style.header__item}>
              <NavLink end className={setActiveClass} to="/zerniatko/">
                Головна
              </NavLink>
            </li>
            <li className={style.header__item}>
              <NavLink end className={setActiveClass} to="/zerniatko/products">
                Товари
              </NavLink>
            </li>
            <li className={style.header__item}>
              <NavLink end className={setActiveClass} to="/zerniatko/categories">
                Категорії
              </NavLink>
            </li>
          </ul>
          <ul className={style.header__auth}>
            <li className={style.header__item}>
              <NavLink className={style.header__link} to="/zerniatko/login">
                Вхід
              </NavLink>
            </li>
            <li className={style.header__item}>
              <NavLink className={style.header__link} to="/zerniatko/register">
                Реєстрація
              </NavLink>
            </li>
          </ul>
        </nav>
        <button className={style.header__button}>
          <img className={style.header__basket} src={button} alt="корзина" />
        </button>
      </Container>
    </header>
  );
}