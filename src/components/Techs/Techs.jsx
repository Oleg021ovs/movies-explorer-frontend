import "./Techs.css";

export default function Techs() {
  return (
    <section className="techs">
      <div className="techs__item">
        <h2 className="techs__description">Технологии</h2>
        <div className="techs__line"></div>
        <div className="techs__container">
          <h1 className="techs__title">7 технологий</h1>
          <p className="techs__text">
            На курсе веб-разработки мы освоили технологии, которые применили в
            дипломном проекте.
          </p>
        </div>
        <nav className="techs__menu">
          <ul className="techs__menu-group">
            <li className="techs__icon">HTML</li>
            <li className="techs__icon">CSS</li>
            <li className="techs__icon">JS</li>
            <li className="techs__icon">React</li>
            <li className="techs__icon">Git</li>
            <li className="techs__icon">Express.js</li>
            <li className="techs__icon">mongoDB</li>
          </ul>
        </nav>
      </div>
    </section>
  );
}
