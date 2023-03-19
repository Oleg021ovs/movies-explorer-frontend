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
        <form className="register__container">
          <div className="register-input__container">
            <div className="register-input__group">
              <label className="register-input__name">Имя</label>
              <input
                className="register__input"
                type="text"
                name="name"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
          </div>
          <div className="register-input__container">
            <div className="register-input__group">
              <label className="register-input__email">E-mail</label>
              <input
                type="email"
                className="register__input"
                name="email"
                required
              />
            </div>
          </div>
          <div className="register-input__container">
            <div className="register-input__group">
              <label className="register-input__password">Пароль</label>
              <input
                className="register__input"
                type="password"
                name="password"
                required
                minLength="2"
                maxLength="40"
              />
            </div>
          </div>

          <span className="register__span">Что-то пошло не так...</span>

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
        </form>
        

        
      </main>
    </>
  );
}
