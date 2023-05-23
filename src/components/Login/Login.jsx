import { useState } from "react";
import "./Login.css";
import AuthForm from "../AuthForm/AuthForm";
import Input from "../Input/Input";

function Login({ handleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function inputEmail(e) {
    setEmail(e.target.value);
  }

  function inputPassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    handleLogin(email, password);
  }
  return (
    <main className="login">
      <AuthForm
        title="Рады видеть!"
        onSubmit={handleSubmit}
        textButton="войти"
        formParagraph="Ещё не зарегистрированы?"
        formLinkPath="/signup"
        FormLinkText="Регистрация"
      >
        <Input
          type="text"
          name="email"
          placeholder="E-mail"
          required
          value={email || ""}
          onChange={inputEmail}
          minLength="2"
          maxLength="40"
        />

        <Input
          type="password"
          name="password"
          placeholder="пароль"
          required
          value={password || ""}
          onChange={inputPassword}
          minLength="2"
          maxLength="200"
        />
      </AuthForm>
    </main>
  );
}
export default Login;
