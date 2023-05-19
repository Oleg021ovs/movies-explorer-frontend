import { useEffect } from "react";
import "./SearhForm.css";
import FormValidation from "../../hooks/FormValidation";
import find from "../../images/find-3.svg";
export default function SearchForm({ handleSearchSubmit }) {
  const { values, handleChange, isValid, resetForm } = FormValidation();

  const isSubmitDisabled = isValid;

  const submitButtonClassName = `searchform__btn ${
    !isSubmitDisabled && "search-form__btn_inactive"
  }`;

  function handleSubmit(e) {
    e.preventDefault();
    handleSearchSubmit(values.keyWord);
  }

  useEffect(() => {
    resetForm({}, {}, false);
  }, [resetForm]);

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
          <button
          type="submit"
          className={submitButtonClassName}
          disabled={!isSubmitDisabled}
        ><img className="searchform__find" src={find} alt="поиск" />
          
        </button>
          
        </div>
      </form>
    </section>
  );
}
/*<button className="searchform__btn" type="submit">
        <img className="searchform__find" src={find} alt="поиск" />
      </button>*/