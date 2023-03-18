import "./SavedMovies.css";
import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import MoviesCard from "../MoviesCard/MoviesCard";
import Preloader from "../Preloader/Preloader";
import Footer from "../Footer/Footer";
import card from "../../images/card1.svg";
import card2 from "../../images/card2.svg";
import card3 from "../../images/card3.svg";

export default function Movies({ loggenIn }) {
  return (
    <>
      <Header loggenIn={loggenIn} />
      <main className="saved-movies">
        <SearchForm />
        <MoviesCardList>
          <MoviesCard
            moviesImages={card}
            moviesTitle="33 слова о дизайне"
            moviesDuration="1ч42м"
          />
          <MoviesCard
            moviesImages={card2}
            moviesTitle="Киноальманах «100 лет дизайна»"
            moviesDuration="1ч42м"
          />
          <MoviesCard
            moviesImages={card3}
            moviesTitle="В погоне за Бенкси"
            moviesDuration="1ч42м"
          />
        </MoviesCardList>
        <Preloader/>
      </main>

      <Footer />
    </>
  );
}
