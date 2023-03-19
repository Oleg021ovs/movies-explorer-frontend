import { Link } from "react-router-dom";
import "./Profile.css";
//import Navigation from "../Navigation/Navigation";
import Header from "../Header/Header";
export default function Profile({loggenIn}) {
  return (
    <>
      <Header loggenIn={loggenIn}/>
      <main className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <div className="profile__container">
          <div className="profile-input__container">
            <div className="profile-input__group">
              <label className="profile__text">Имя</label>
              <input
                className="profile__input"
                type="text"
                id="profile-name"
                name="profile-name"
                placeholder=" "
                defaultValue="Виталий"
                minLength="2"
                maxLength="40"
                required
              />
            </div>
          </div>
          
          <div className="profile-input__container">
            <div className="profile-input__group">
              <label className="profile__text">E-mail</label>
              <input
                className="profile__input"
                type="email"
                placeholder=" "
                defaultValue="vetal@yandex.ru"
                required
              />
            </div>
          </div>
        </div>

        <div className="profile-btn__container">
          <button
            aria-label="Редактировать профиль"
            type="submit"
            className="profile__button"
          >
            Редактировать
          </button>

          <Link to="/sign-in" className="profile-exit__link">
            <button
              aria-label="выйти из профиля"
              type="submit"
              className="profile-exit__button"
            >
              Выйти из аккаунта
            </button>
          </Link>
        </div>
      </main>
    </>
  );
}
