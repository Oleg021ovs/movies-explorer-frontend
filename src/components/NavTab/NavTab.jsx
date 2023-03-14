import React from "react";
//import { Link } from "react-router-dom";
import "./NavTab.css";
export default function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__container">
        <li className="navtab__list">
          {" "}
          <a className="navtab__link" href="#Promo">
            О проекте
          </a>
        </li>
        <li className="navtab__list">
          <a className="navtab__link" href="#Techs">
            Технологии
          </a>
        </li>
        <li className="navtab__list">
          <a className="navtab__link" href="#AboutMe">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
