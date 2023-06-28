import { useState } from "react";

import { useSearchContext } from "../../context/searchContext";
import style from "./SearchForm.module.css";

function SearchForm() {
  const { setKeyword } = useSearchContext();
  const [inputValue, setInputValue] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setKeyword(inputValue);
  }

  return (
    <form onSubmit={handleSubmit} className={style.form}>
      <input
        type="search"
        className={`form-control ${style.searchInput}`}
        placeholder="Search..."
        autoFocus="on"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </form>
  );
}

export default SearchForm;
