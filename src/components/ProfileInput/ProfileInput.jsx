import React from "react";
import "./ProfileInput.css";


export default function ProfileInput({ className, ProfileInputTitle, ...rest }) {
  return (
    <div className="profile__input-box">
      <label className="profile__input-title">{ProfileInputTitle}</label>
      <input {...rest} className="profile__input" />
    </div>
  );
}