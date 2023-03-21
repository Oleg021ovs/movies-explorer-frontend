import "./HeaderRegistr.css";
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.svg";

export default function HeaderRegistr() {
  return (
    <div className="header__registr">
      <div className="header__container">
        <Link to="/" className="header__btn">
          <img className="header__logo" src={logo} alt="логотип" />
        </Link>

        <div className="header__menu">
          <Link to="/sign-up" className="header__link header__link-registry">
            Регистрация
          </Link>

          <Link to="/sign-in">
            <button className="header__link-auth">Войти</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
