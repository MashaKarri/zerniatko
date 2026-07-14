import { NavLink } from "react-router-dom";
import style from "./SignHeader.module.css";
import logo from "../../assets/logo.svg";

export default function SignHeader() {
  return (
    <header className={style.header}>
      <NavLink to="/zerniatko">
        <img className={style.header__icon} src={logo} alt="Logo" />
      </NavLink>
    </header>
  );
}
