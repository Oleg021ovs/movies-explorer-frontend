import "./Footer.css";
import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__item">
        <h5 className="footer__film">
          Учебный проект Яндекс.Практикум х BeatFilm.
        </h5>
        <div className="footer__container">
          <p className="footer__copyright">&copy;2023</p>
          <div className="footer__group">
            <Link target="_blank" to="https://practicum.yandex.ru/">
              <p className="footer__practicum">Яндекс.Практикум</p>
            </Link>

            <Link target="_blank" to="https://github.com/Oleg021ovs">
              <p className="footer__github">Github</p>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
