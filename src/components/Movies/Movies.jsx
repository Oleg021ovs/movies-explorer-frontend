import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import SearchFormFilter from "../SearchFormFilter/SearchFormFilter";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";
import "./Movies.css";

export default function Movies({
  userLoggedIn,
  handleSearchSubmit,
  movies,
  savedMovies,
  handleMovieSave,
  handleMovieDelete,
}) {
  return (
    <>
      <Header userLoggedIn={userLoggedIn} />
      <main className="movies">
        <SearchForm handleSearchSubmit={handleSearchSubmit} />
        <SearchFormFilter />
        <MoviesCardList
          movies={movies}
          handleMovieSave={handleMovieSave}
          handleMovieDelete={handleMovieDelete}
          savedMovies={savedMovies}
        />
      </main>
      <Footer />
    </>
  );
}
