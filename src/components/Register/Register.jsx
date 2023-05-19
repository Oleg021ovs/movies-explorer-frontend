import { useState } from "react";
import "./Register.css";
//import { Link } from "react-router-dom";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";
function Register({ handleRegister }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function inputName(e) {
    setName(e.target.value);
  }

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function inputPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleRegister( name, email, password );
  }
  return (
    <main className="register">
      <AuthForm
        title="Добро пожаловать!"
        onSubmit={handleSubmit}
        textButton="зарегистрироваться"
        formParagraph="Уже зарегистрированы?"
        formLinkPath="/signin"
        FormLinkText="Войти"
      >
        <Input
          type="text"
          name="name"
          minLength="2"
          maxLength="30"
          required
          placeholder="имя"
          value={name || ""}
          onChange={inputName}
        />
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          minLength="2"
          maxLength="40"
          value={email || ""}
          onChange={inputEmail}
        />

        <Input
          type="password"
          name="password"
          placeholder="пароль"
          required
          minLength="2"
          maxLength="200"
          value={password || ""}
          onChange={inputPassword}
        />
      </AuthForm>
    </main>
  );
}

export default Register;