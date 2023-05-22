/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";
import * as MoviesApi from "../../utils/MoviesApi";
import Preloader from "../Preloader/Preloader";

export default function Movies({
  userLoggedIn,
  token,
  movies,
  setMovies,
  savedMovies,
  handleMovieSave,
  handleMovieDelete,
}) {
  const [allMovies, setAllMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [searchedMovies, setSearchedMovies] = useState([]);
  const [searchText, setSearchText] = useState("");
  const localStorageData = JSON.parse(localStorage.getItem("localStorageData"));
  const [searchDataText, setSearchDataText] = useState("");
  const [searchErrorText, setSearchErrorText] = useState("");
  const [isSelectedShortMovie, setIsSelectedIsShortMovie] = useState(false);

  useEffect(() => {
    if (localStorageData) {
      setSearchDataText(localStorageData.search);
      setSearchedMovies(localStorageData.movies);
      if (localStorageData.movies.length === 0) {
        setSearchText("Ничего не найдено");
      }
    }
    if (localStorage) {
      setIsSelectedIsShortMovie(JSON.parse(localStorage.getItem("ShortFilms")));
    }
  }, []);

  // Поиск фильмов с api
  // eslint-disable-next-line no-redeclare
  function handleSearchSubmit(values) {
    setSearchErrorText("");
    setSearchText("");

    if (allMovies.length === 0) {
      setIsLoading(true);
      MoviesApi.getInitialMovies()
        .then((movies) => {
          setAllMovies(movies);
          searchMovies(movies, values);
        })
        .catch((err) => {
          console.log(err);
          setSearchText(
            "Во время запроса произошла ошибка. Возможно, проблема с соединением или сервер недоступен.Подождите немного и попробуйте ещё раз."
          );
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }

  function getSearchMovieList(movies, values) {
    return movies.filter((movie) => {
      return movie.nameRU.toLowerCase().includes(values.toLowerCase());
    });
  }

  function searchMovies(movies, values) {
    const searchedMovies = getSearchMovieList(movies, values);
    const viewMovies = searchedMovies.slice(0);

    const localStorageData = { search: values, movies: searchedMovies };
    localStorage.setItem("localStorageData", JSON.stringify(localStorageData));

    setSearchedMovies(searchedMovies);

    setAllMovies(viewMovies);
    if (searchedMovies.length === 0) {
      setSearchText("Ничего не найдено");
    }
  }

  // Короткометражки
  function handleChangeShortMovie() {
    setIsSelectedIsShortMovie(!isSelectedShortMovie);
    localStorage.setItem("ShortFilms", JSON.stringify(!isSelectedShortMovie));
  }

   
  movies = isSelectedShortMovie
    ? movies.filter((m) => m.duration > 40)
    : movies.filter((m) => m.duration < 40);



  return (
    <>
      <Header userLoggedIn={userLoggedIn} />
      <main className="movies">
        <SearchForm
          handleSearchSubmit={handleSearchSubmit}
          searchErrorText={searchErrorText}
          setSearchErrorText={setSearchErrorText}
          searchDataText={searchDataText}
        />
        <SearchFormFilter
          handleChangeShortMovie={handleChangeShortMovie}
          isSelectedShortMovie={isSelectedShortMovie}
        />
        {isLoading && <Preloader />}
        <MoviesCardList
          movies={movies}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
          searchedMovies={searchedMovies}
          searchText={searchText}
        />
      </main>
      <Footer />
    </>
  );
}
