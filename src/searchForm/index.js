import { useState } from "react";

import { useSearchContext } from "../context/searchContext";
import style from "./SearchForm.module.css";

function SearchForm() {
  const { keyword, setKeyword } = useSearchContext();
  const [inputValue, setInputValue] = useState(keyword);

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(inputValue);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="search"
        className={`form-control ${style.searchInput}`}
        placeholder="Enter a keyword..."
        autoFocus="on"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button className={`btn ${style.searchButton}`}>Search</button>
    </form>
  );
}

export default SearchForm;
