import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./HeaderAuth.css";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import icons from "../../images/icons.svg";
export default function HeaderAuth({ onNavigation }) {
  return (
    <>
      <div className="header__auth">
        <div className="header__content">
          <div className="header__box">
            <Link to="/" className="header__btn">
              <img className="header__logo" src={logo} alt="логотип" />
            </Link>
            <div className="header__group">
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  isActive ? "header__film header__film_active" : "header__film"
                }
              >
                Фильмы
              </NavLink>
              <NavLink
                to="/saved-movies"
                className={({ isActive }) =>
                  isActive ? "header__film header__film_active" : "header__film"
                }
              >
                Сохранённые фильмы
              </NavLink>
            </div>
          </div>

          <Link to="/profile" className="header__btn-auth">
            <img className="header__profile" src={profile} alt="кнопка" />
          </Link>
          <button
            type="button"
            className="navigation__icons-btn"
            onClick={onNavigation}
          >
            <img className="navigation__icons" src={icons} alt="кнопка" />
          </button>
        </div>
      </div>
    </>
  );
}
