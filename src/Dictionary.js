import React, { useState } from "react";
import requestWordData from "./apiWordData";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [results, setResults] = useState(null);

  function handleDictionaryResponse(response) {
    console.log(response.data[0]);
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
          {results.word}
          <br />
          {results.phonetics[0].text}
          <br />
          {results.phonetics[0].audio}
          <br />
          {results.meanings[0].partOfSpeech}
          <br />
          {results.meanings[0].definitions[0].definition}
        </section>
      </div>
    );
  } else {
    search();
    return null;
  }
}

export default Dictionary;
