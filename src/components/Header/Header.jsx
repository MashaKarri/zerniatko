import logo from "../../assets/logo.svg";
import button from "../../assets/button.svg";
import style from "./Header.module.css";
import { Container } from "../Container/ContainerLayout.jsx";
import { Link, NavLink } from "react-router-dom";

export default function Header() {

  const setActiveClass = ({ isActive }) => 
    isActive ? `${style.header__link} ${style.header__link_active}` : style.header__link;

  return (
    <header className={style.header}>
      <Container>
        <nav className={style.header__navigation}>


            <img className={style.header__icon} src={logo} alt="Logo" />


          <ul className={style.header__list}>
            <li className={style.header__item}>

              <NavLink to="/" className={setActiveClass}>
                Головна
              </NavLink>
            </li>
            <li className={style.header__item}>
 
              <a className={style.header__link} href="#">
                Товари
              </a>
            </li>
            <li className={style.header__item}>
   
              <NavLink to="/categories" className={setActiveClass}>
                Категорії
              </NavLink>
            </li>
          </ul>

          <ul className={style.header__auth}>
            <li className={style.header__item}>
            
              <a className={style.header__link} href="#">
                Вхід
              </a>
            </li>
            <li className={style.header__item}>
              
              <a className={style.header__link} href="#">
                Реєстрація
              </a>
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
