import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
export default function Login() {
  return (
    <>
      <main className="login">
        <div className="login__header">
          <Link to="/" className="login__header-btn">
            <img className="login__header-logo" src={logo} alt="логотип" />
          </Link>
          <h1 className="login__title">Добро пожаловать!</h1>
        </div>

        <div className="login__container">
          <div className="login-input__container">
            <div className="login-input__group">
              <input
                className="login__input"
                type="email"
                placeholder="E-mail"
                required
              />
            </div>
          </div>
          <div className="login__line"></div>
          <div className="login-input__container">
            <div className="login-input__group">
              <input
                className="login__input"
                type="password"
                name="password"
                placeholder="Пароль"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
          </div>

          <div className="login__line"></div>
        </div>

        <div className="login-btn__container">
          <Link to="/movies" className="login-link__entrance">
            <button aria-label="Войти" type="submit" className="login__button">
              Войти
            </button>
          </Link>

          <div className="register-btn__group">
            <p className="register__paragraph">Уже зарегистрированы?</p>
            <Link to="/sign-up" className="register-exit__link">
              <button
                aria-label="выйти из профиля"
                type="submit"
                className="register-exit__button"
              >
                Регистрация
              </button>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
