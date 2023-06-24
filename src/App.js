import SearchForm from "./searchForm";
import Dictionary from "./dictionary";
import Photos from "./photos";

import SearchKeywordProvider from "./context/searchContext";
import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container">
        <header>
          <h1>Word Explorer</h1>
        </header>
        <main>
          <SearchKeywordProvider>
            <SearchForm />
            <Dictionary />
            <Photos />
          </SearchKeywordProvider>
        </main>
        <footer>
          <a
            href="github.com/alina-vakulenko/word-explorer"
            target="_blank"
            rel="norefferrer"
            title="GitHub"
          >
            Open-source
          </a>{" "}
          code
        </footer>
      </div>
    </div>
  );
}

export default App;
