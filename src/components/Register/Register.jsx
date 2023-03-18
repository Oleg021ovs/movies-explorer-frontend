import React from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
export default function Register() {
  return (
    <>
      <main className="register">
        <div className="register__header">
          <Link to="/" className="register__header-btn">
            <img className="register__header-logo" src={logo} alt="логотип" />
          </Link>
          <h1 className="register__title">Добро пожаловать!</h1>
        </div>

        <div className="register__container">
          <div className="register-input__container">
            <div className="register-input__group">
              <input
                className="register__input"
                type="text"
                id="register-name"
                name="register-name"
                placeholder="Имя"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
          </div>
          <div className="register__line"></div>
          <div className="register-input__container">
            <div className="register-input__group">
              <input
                className="register__input"
                name="email"
                type="email"
                placeholder="E-mail"
                required=""
              />
            </div>
          </div>
          <div className="register__line"></div>
          <div className="register-input__container">
            <div className="register-input__group">
              <input
                className="register__input"
                type="password"
                name="password"
                required
                placeholder="Пароль"
                minLength="2"
                maxLength="40"
               
              />
            </div>
          </div>

          <div className="register__line"></div>
          <span className="register__span">Что-то пошло не так...</span>
        </div>

        <div className="register-btn__container">
          <button
            aria-label="Зарегистрироваться"
            type="submit"
            className="register__button"
          >
            Зарегистрироваться
          </button>

          <div className="register-btn__group">
            <p className="register__paragraph">Уже зарегистрированы?</p>
            <Link to="/sign-in" className="register-exit__link">
              <button
                aria-label="выйти из профиля"
                type="submit"
                className="register-exit__button"
              >
                Войти
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
