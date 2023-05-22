import "./ProfileForm.css";
import { Link } from "react-router-dom";
function ProfileForm({
  profileTitle,
  ProfileButton,
  onSubmit,
  children,
  ProfileExit,
  signOut,
}) {
  return (
    <form className="profile-form" onSubmit={onSubmit}>
      <h2 className="profile__title">Привет {profileTitle} !</h2>
      <fieldset className="profile-input__container">{children}</fieldset>
      <div className="profile-form__box">
        <button
          aria-label="Редактировать профиль"
          type="submit"
          className="profile__button"
        >
          {ProfileButton}
        </button>

        <Link to="/signin" onClick={signOut} className="profile__exit-button">
          {ProfileExit}
        </Link>
      </div>
    </form>
  );
}
export default ProfileForm;
