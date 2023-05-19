import React from "react";
import "./MoviesCardList.css";
import MoviesCard from "../MoviesCard/MoviesCard";

export default function MoviesCardList({ movies, handleMovieSave, handleMovieDelete, savedMovies }) {
  return (
    <section className="movies-card-list">
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
        })};
      </ul>
      <button
            type="button"
            aria-label="Показать еще фильмы"
            className="movies-card-list__btn"
          >
            Ещё
          </button>
    </section>
  );
}