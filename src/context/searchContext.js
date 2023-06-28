import { useState, createContext, useContext } from "react";

import { DEFAULT_SEARCH_WORD } from "../config";

const SearchContext = createContext(null);

const SearchKeywordProvider = ({ children }) => {
  const [keyword, setKeyword] = useState(DEFAULT_SEARCH_WORD);
  const [phonetics, setPhonetics] = useState([]);

  return (
    <SearchContext.Provider
      value={{ keyword, setKeyword, phonetics, setPhonetics }}
    >
      {children}
    </SearchContext.Provider>
  );
};
export default SearchKeywordProvider;

export const useSearchContext = () => {
  return useContext(SearchContext);
};
