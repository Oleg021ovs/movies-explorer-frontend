import { useEffect } from "react";
import "./SearhForm.css";
import FormValidation from "../../hooks/FormValidation";
import find from "../../images/find-3.svg";
export default function SearchForm({
  handleSearchSubmit,
  searchErrorText,
  setSearchErrorText,
  searchDataText,
}) {
  const { values, handleChange } = FormValidation();

  function handleSubmit(e) {
    e.preventDefault();
    if (values.keyWord === " ") {
      setSearchErrorText("Нужно ввести ключевое слово");
      return;
    }
    handleSearchSubmit(values.keyWord);
  }

  useEffect(() => {
    if (searchDataText) {
      values.keyWord = searchDataText;
    }
  }, [searchDataText, values]);

  useEffect(() => {
    if (searchDataText) {
      values.keyWord = searchDataText;
    }
  }, [searchDataText, values]);

  return (
    <section className="search-form">
      <form className="searchform__form" onSubmit={handleSubmit}>
        <div className="searhform__container">
          <input
            value={values.keyWord || ""}
            onChange={handleChange}
            id="keyWord"
            type="text"
            name="keyWord"
            minLength="1"
            maxLength="30"
            placeholder="Фильм"
            className="searchform__input"
            required
          />
          <button type="submit" className="searchform__btn">
            <img className="searchform__find" src={find} alt="поиск" />
          </button>
        </div>
        <p className="search-form__input_error">{searchErrorText}</p>
      </form>
    </section>
  );
}
