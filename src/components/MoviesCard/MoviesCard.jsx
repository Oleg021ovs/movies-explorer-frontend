import "./MoviesCard.css";

import like from "../../images/like.svg";
export default function MoviesCard({
  moviesImages,
  moviesTitle,
  moviesDuration,
}) {
  return (
    <>
      <li className="movies-card">
        <div className="movies-card__item">
          <div className="movies-card__images">
            <img className="movies-card__img" src={moviesImages} alt="фильм" />
          </div>
          <div className="movies-card__container">
            <h3 className="movies-card__title">{moviesTitle}</h3>
            <img className="movies-card__likes" src={like} alt="лайк" />
          </div>
          <div className="movies-card__group">
            <div className="movies-card__line"></div>
            <div className="movies-card__duration">{moviesDuration}</div>
          </div>
        </div>
      </li>
    </>
  );
}
