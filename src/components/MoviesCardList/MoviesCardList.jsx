import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";
import { useLocation } from "react-router-dom";
export default function MoviesCardList({
  movies,
  handleMovieSave,
  handleMovieDelete,
  searchedMovies,
  savedMovies,
  searchText,
}) {
  const location = useLocation();
  return (
    <section className="movies-card-list">
      {searchText && (
        <p className="movies-card-list__search-text">{searchText}</p>
      )}
      <ul className="movies-card-list__container">
        {movies?.map((movie) => {
          return (
            <MoviesCard
              key={movie.id || movie._id}
              movie={movie}
              handleMovieSave={handleMovieSave}
              handleMovieDelete={handleMovieDelete}
              savedMovies={savedMovies}
            />
          );
        })}
        ;
      </ul>

      {location.pathname !== "/saved-movies" &&
        movies.length > 3 &&
        movies.length !== searchedMovies.length && (
          <button
            type="button"
            aria-label="Показать еще фильмы"
            className="movies-card-list__btn"
          >
            Ещё
          </button>
        )}
    </section>
  );
}
