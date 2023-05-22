import "./SearchFormFilter.css";

export default function SearchFormFilter({
  handleChangeShortMovie,
  isSelectedShortMovie,
}) {
  return (
    
    <div className="search-form__filter">
      <div className="search-form__filter-container">
        <button
          type="button"
          className={`search-form__filter-switch ${
            !isSelectedShortMovie ? "search-form__filter-switch_active" : ""
          }`}
          onClick={handleChangeShortMovie}
        />
        <span className="search-form__filter-name">Короткометражки</span>
      </div>
    </div>
  );
}