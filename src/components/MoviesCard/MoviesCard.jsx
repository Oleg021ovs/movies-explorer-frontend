import { useLocation } from "react-router-dom";
import "./MoviesCard.css";

export default function MoviesCard({
  movie,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
}) {
  const location = useLocation();
  const savedMovieOk = location.pathname === "/saved-movies";
  const image = !savedMovieOk
    ? `https://api.nomoreparties.co${movie.image.url}`
    : `${movie.image}`;

  function minutesToHours(minutes) {
    const hours = Math.trunc(minutes / 60);
    const min = minutes % 60;
    const result = hours > 0 ? `${hours}ч ${min}м` : `${min}м`;

    return result;
  }

  function handleSaveMovieClick() {
    console.log(movie);
    if (isSaved) {
      handleMovieDelete(savedMovies.filter((m) => m.movieId === movie.id)[0]);
    } else if (!isSaved) {
      handleMovieSave(movie);
    }
  }

  function handleDeleteSavedClick() {
    console.log(movie);
    handleMovieDelete(movie);
  }
  const isSaved = movie.id && savedMovies.some((m) => m.movieId === movie.id);
  return (
    <>
      <li className="movies-card">
        <div className="movies-card__item">
          <div className="movies-card__images">
          <a
        className="movies-card__link"
        href={movie.trailerLink}
        target="_blank"
        rel="noreferrer"
      >
            <img className="movies-card__img" src={image} alt="фильм" />
            </a>
          </div>
          <div className="movies-card__container">
            <h3 className="movies-card__title">{movie.nameRU}</h3>
            {!savedMovieOk && (
          <button
          onClick={handleSaveMovieClick}
            className={`movie-card__save-btn_active ${
              isSaved ? "movie-card__save-btn" : ""
            }`}
            type="button"
            
          ></button>
        )}
        {savedMovieOk && (
          <button
            className="movie-card__delete-saved-btn"
            type="button"
            onClick={handleDeleteSavedClick}
          ></button>
        )}
          </div>
        </div>
        <div className="movies-card__group">
          <div className="movies-card__duration">{minutesToHours(movie.duration)}</div>
        </div>
      </li>
    </>
  );
}