import "./AuthForm.css";
import logo from "../../images/logo.svg";
import { Link } from "react-router-dom";
function AuthForm({ title, textButton, onSubmit, children, formParagraph, formLinkPath, FormLinkText }) {
    return (
        <form className="form" onSubmit={onSubmit}>
            <Link to="/" className="form-btn">
            <img className="form-logo" src={logo} alt="логотип" />
          </Link>
          <h2 className="auth__title">{title}</h2>
            <fieldset className="form-input__container">{children}</fieldset>
            <button
              type="submit"
              aria-label="Отправить данные"
              className="form__btn"
            >
              {textButton}
            </button>
            <div className="form__btn-box">
        <p className="form__paragraph">
          {`${formParagraph} `}
          <Link className="form__btn-link" to={formLinkPath}>
            {FormLinkText}
          </Link>
        </p>
      </div>
          
        </form>
      );
  }
  export default AuthForm;