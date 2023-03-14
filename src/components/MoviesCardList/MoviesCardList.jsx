import React from "react";
import "./MoviesCardList.css";

export default function MoviesCardList({ children }) {
  return (
    <section className="movies-card-list">
      <ul className="movies-card-list__container">{children}</ul>
    </section>
  );
}
