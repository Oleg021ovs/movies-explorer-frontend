import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import Footer from "../Footer/Footer";

export default function SavedMovies({
  userLoggedIn,
  movies,
  handleMovieSave,
  handleMovieDelete,
  savedMovies,
}) {
  return (
    <>
      <Header userLoggedIn={userLoggedIn} />
      <main className="saved-movies">
        <SearchForm />
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