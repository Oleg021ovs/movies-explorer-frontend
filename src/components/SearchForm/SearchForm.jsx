import "./SearhForm.css";
import find from "../../images/find-3.svg";
export default function SearchForm() {
  return (
    <section className="search-form">
      <form className="searchform__form">
        <div className="searhform__container">
          <input
            className="searchform__input"
            type="text"
            placeholder="Фильм"
            required
          />
          <button className="searchform__btn" type="submit">
            <img className="searchform__find" src={find} alt="поиск" />
          </button>
        </div>
      </form>
      <div className="search-form__checkbox-container">
        <label className="search-form__label">
          <input className="search-form__checkbox" type="radio" />
        </label>
        <h4 className="search-form__title">Короткометражки</h4>
      </div>

      <div className="search-form__line"></div>
    </section>
  );
}
