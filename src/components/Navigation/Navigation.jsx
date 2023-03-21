import React from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navigation.css";
import profile from "../../images/profile.svg";
import closeBtn from "../../images/close.svg";
export default function HeaderAuth({ isOpen, onClose }) {
  return (
    <div className={`navigation__auth ${isOpen && "navigation-opened"}`}>
      <div className="navigation__container">
        <button className="navigation__close" onClick={onClose}>
          <img className="navigation__close-img" src={closeBtn} alt="закрыть" />
        </button>
        <div className="navigation__group">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "navigation__main navigation__main_active"
                : "navigation__main"
            }
          >
            Главная
          </NavLink>
          <NavLink
            to="/movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__main navigation__main_active"
                : "navigation__main"
            }
          >
            Фильмы
          </NavLink>
          <NavLink
            to="/saved-movies"
            className={({ isActive }) =>
              isActive
                ? "navigation__main navigation__main_active"
                : "navigation__main"
            }
          >
            Сохранённые фильмы
          </NavLink>
        </div>
        <Link to="/profile" className="navigation__btn">
          <img className="navigation__profile-btn" src={profile} alt="кнопка" />
        </Link>
      </div>
    </div>
  );
}
