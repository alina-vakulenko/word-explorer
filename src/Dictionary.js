import React, { useState } from "react";
import requestWordData from "./apiWordData";
import Pronunciation from "./Pronunciation";
import Meanings from "./Meanings";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    requestWordData(keyword, handleDictionaryResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleWord(event) {
    setKeyword(event.target.value);
  }

  const searchForm = (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        className="form-control"
        placeholder="Enter a keyword..."
        autoFocus="on"
        onChange={handleWord}
      ></input>
      <input type="submit" value="Search" className="btn search-button"></input>
    </form>
  );

  if (results) {
    return (
      <div className="Dictionary">
        <div>{searchForm}</div>

        <section>
          <h3 className="text-capitalize">{results.word}</h3>
          {results.phonetics
            .filter((pronunciation) => pronunciation.text)
            .map((pronunciation, index) => (
              <div key={index}>
                <Pronunciation pronunciation={pronunciation} />
              </div>
            ))}
        </section>

        <section>
          {results.meanings.map((meanings, index) => (
            <div key={index}>
              <Meanings meanings={meanings} />
            </div>
          ))}
        </section>
      </div>
    );
  } else {
    search();
    return null;
  }
}

export default Dictionary;
