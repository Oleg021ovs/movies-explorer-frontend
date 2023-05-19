import { useEffect, useState, useContext } from "react";
import { CurrentUserContext } from "../../Contexts/CurrentUserContext";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfileInput from "../ProfileInput/ProfileInput";
//import FormValidation from "../../hooks/FormValidation"
import Header from "../Header/Header";
function Profile({userLoggedIn, onUpdateUser}) {
  const [name, setName] = useState("");
  const [isEmail, setIsEmail] = useState("");
  const currentUser = useContext(CurrentUserContext);

  function inputName(e) {
    setName(e.target.value);
  }
  function inputEmail(e) {
    setIsEmail(e.target.value);
  }

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onUpdateUser({
      name,
      email: isEmail,
    });
  }

  useEffect(() => {
    setName(currentUser.name || "");
    setIsEmail(currentUser.email || "");
  }, [currentUser]);
  
  return (
    <>
    <Header userLoggedIn={userLoggedIn}/>
      <main className="profile">
        <ProfileForm
          profileTitle={currentUser.name}
          ProfileButton="Редактировать"
          ProfileExit="Выйти из аккаунта"
          onSubmit={handleSubmit}
          
          >
<ProfileInput
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          required
          placeholder="имя"
          value={name || ""}
          onChange={inputName}
          
        />
        <ProfileInput
          type="text"
          name="email"
          placeholder="E-mail"
          required
          minLength="2"
          maxLength="40"
          value={isEmail || ""}
          onChange={inputEmail}
          
        />

        </ProfileForm>
      </main>
    </>
  );
}

export default Profile;