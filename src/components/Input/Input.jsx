import React from "react";
import "./Input.css";

export default function Input({ className, inputTitle, ...rest }) {
  return (
    <div className="input__box">
      <label className="input__title">{inputTitle}</label>
      <input {...rest} className="input" />
      <span className="input__error">Что-то пошло не так...</span>
    </div>
  );
}