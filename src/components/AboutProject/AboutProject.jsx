import "./AboutProject.css";

export default function AboutProject() {
  return (
    <section className="about-project">
      <div className="about-project__item">
        <h2 className="about-project__title">О проекте</h2>
        <div className="about-project__line"></div>
        <div className="about-project__container">
          <div className="about-project__group">
            <h3 className="about-project__description">
              Дипломный проект включал 5 этапов
            </h3>
            <p className="about-project__text">
              Составление плана, работу над бэкендом,вёрстку,добавление
            </p>
            <p className="about-project__text">
              функциональности и финальные доработки.
            </p>
          </div>
          <div className="about-project__group">
            <h3 className="about-project__description">
              На выполнение диплома ушло 5 недель
            </h3>
            <p className="about-project__text">
              У каждого этапа был мягкий и жёсткий дедлайн,которые нужно было
            </p>
            <p className="about-project__text">
              соблюдать, чтобы успешно защититься.
            </p>
          </div>
        </div>
        <div className="about-project__week">
          <div className="about-project__group">
            <p className="about-project__oneweek">1 неделя</p>
            <p className="about-project__bakend">Back-end</p>
          </div>
          <div className="about-project__groups">
            <p className="about-project__fourweeks">4 недели</p>
            <p className="about-project__frontend">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}
