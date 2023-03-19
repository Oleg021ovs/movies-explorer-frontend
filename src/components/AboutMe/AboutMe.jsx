import "./AboutMe.css";
import React from "react";
import { Link } from "react-router-dom";
import avatar from "../../images/avatar.svg";
import arrow from "../../images/arrow.svg";

export default function AboutMe() {
  return (
    <section className="aboutme" id="aboutme">
      <div className="aboutme__item">
        <h3 className="aboutme__description">Студент</h3>
        <div className="aboutme__line"></div>
        <div className="aboutme__container">
          <div className="aboutme__group">
            <h2 className="aboutme__name">Виталий</h2>
            <p className="aboutme__speciality">Фронтенд-разработчик, 30 лет</p>
            <p className="aboutme__biography">
              Я родился и живу в Саратове, закончил факультет экономики СГУ. У
              меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь
              бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ
              Контур». После того, как прошёл курс по веб-разработке, начал
              заниматься фриланс-заказами и ушёл с постоянной работы.
            </p>
            <h4 className="aboutme__link-text">
              <Link
                to="https://github.com/Oleg021ovs"
                target="_blank"
                className="aboutme__link"
              >
                Github
              </Link>
            </h4>
            <h5 className="about__portfolio">Портфолио</h5>
          </div>
          <img className="aboutme__avatar" src={avatar} alt="аватар" />
        </div>

        <div className="aboutme__site">
          <div className="aboutme__site-group">
            <Link to="https://oleg021ovs.github.io/how-to-learn/" target="_blank" className="aboutme__site-link"><div className="aboutme__site-text">Статичный сайт</div></Link>
          </div>
          <Link to="https://oleg021ovs.github.io/how-to-learn/" target="_blank" className="aboutme__btn">
            <img className="aboutme__arrow" src={arrow} alt="стрелка" />
          </Link>
        </div>
        
        <div className="aboutme__site-adaptiv">
          <div className="aboutme__site-group">
            <Link
              to="https://oleg021ovs.github.io/russian-travel/"
              target="_blank"
              className="aboutme__site-link"
            >
              <div className="aboutme__site-text">Адаптивный сайт</div>
            </Link>
          </div>
          <Link
            to="https://oleg021ovs.github.io/russian-travel/"
            target="_blank"
            className="aboutme__btn"
          >
            <img className="aboutme__arrow" src={arrow} alt="стрелка" />
          </Link>
        </div>
        
        <div className="aboutme__site-application">
          <div className="aboutme__site-group">
            <Link
              to="https://oleg021ovs.github.io/mesto-react/"
              target="_blank"
              className="aboutme__site-link"
            >
              <div className="aboutme__site-text">
                Одностраничное приложение
              </div>
            </Link>
          </div>
          <Link
            to="https://oleg021ovs.github.io/mesto-react/"
            target="_blank"
            className="aboutme__btn"
          >
            <img className="aboutme__arrow" src={arrow} alt="стрелка" />
          </Link>
        </div>
      </div>
    </section>
  );
}
