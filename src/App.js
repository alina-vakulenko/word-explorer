import Header from "./header";
import Dictionary from "./dictionary";
import Photos from "./photos";

import SearchKeywordProvider from "./context/searchContext";
import WordleProvider from "./context/wordleContext";
import WordleGame from "./wordle/WordleGame";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="container-fluid p-0">
        <SearchKeywordProvider>
          <Header />
          <main>
            {/* <Dictionary /> */}
            {/* <Photos /> */}
            <WordleProvider>
              <WordleGame />
            </WordleProvider>
          </main>
        </SearchKeywordProvider>
      </div>
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
  );
}

export default App;
