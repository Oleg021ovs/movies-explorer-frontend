import Header from "../Header/Header";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCard from "../MoviesCard/MoviesCard";
import MoviesCardList from "../MoviesCardList/MoviesCardList";

import Yeshche from "../Yeshche/Yeshche";
import Footer from "../Footer/Footer";
import card from "../../images/card1.svg";
import card2 from "../../images/card2.svg";
import card3 from "../../images/card3.svg";
import card4 from "../../images/card4.svg";
import card5 from "../../images/card5.svg";
import card6 from "../../images/card6.svg";
import card7 from "../../images/card7.svg";
import card12 from "../../images/card12.svg";
import card13 from "../../images/card13.svg";
import card14 from "../../images/card14.svg";

export default function Movies({ loggenIn }) {
  return (
    <>
      <Header loggenIn={loggenIn} />

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
        <MoviesCard
          moviesImages={card4}
          moviesTitle="Баския: Взрыв реальности"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card5}
          moviesTitle="Бег это свобода"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card6}
          moviesTitle="Книготорговцы"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card7}
          moviesTitle="Когда я думаю о Германии ночью"
          moviesDuration="1ч42м"
        />
        
        <MoviesCard
          moviesImages={card12}
          moviesTitle="По волнам: Искусство звука в кино"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card12}
          moviesTitle="Рудбой"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card13}
          moviesTitle="Скейт — кухня"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card14}
          moviesTitle="Война искусств"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card}
          moviesTitle="33 слова о дизайне"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card12}
          moviesTitle="Рудбой"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card13}
          moviesTitle="Скейт — кухня"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card14}
          moviesTitle="Война искусств"
          moviesDuration="1ч42м"
        />
        <MoviesCard
          moviesImages={card}
          moviesTitle="33 слова о дизайне"
          moviesDuration="1ч42м"
        />
      </MoviesCardList>
      <Yeshche />

      <Footer />
    </>
  );
}
