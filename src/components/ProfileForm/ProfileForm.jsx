import "./ProfileForm.css";
//import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
//import { Link } from "react-router-dom";
function ProfileForm({ profileTitle, ProfileButton, onSubmit, children, ProfileExit  }) {

  //const currentUser = useContext(CurrentUserContext);
    return (
        <form className="profile-form" onSubmit={onSubmit}>
          <h2 className="profile__title">Привет {profileTitle} !</h2>
            <fieldset className="profile-input__container">{children}</fieldset>
            <div className="profile-form__box">
        <button aria-label="Редактировать профиль"
            type="submit" className="profile__button">{ProfileButton}</button>
            <button aria-label="выход из профиля"
            type="submit" className="profile__exit-button">{ProfileExit}</button>
      </div>
          
        </form>
      );
  }
  export default ProfileForm;