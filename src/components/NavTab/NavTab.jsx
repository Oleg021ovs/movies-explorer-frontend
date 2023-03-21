import React from "react";
//import { Link } from "react-router-dom";
import "./NavTab.css";
export default function NavTab() {
  return (
    <section className="navtab">
      <ul className="navtab__container">
        <li className="navtab__list">
          
          <a className="navtab__link" href="#about-project">
            О проекте
          </a>
        </li>
        <li className="navtab__list">
          <a className="navtab__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="navtab__list">
          <a className="navtab__link" href="#aboutme">
            Студент
          </a>
        </li>
      </ul>
    </section>
  );
}
