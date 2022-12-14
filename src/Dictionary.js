import React, { useState } from "react";
import requestWordData from "./apiWordData";
import Pronunciation from "./Pronunciation";
import Meanings from "./Meanings";
import Photos from "./Photos";
import requestPhotos from "./requestPhotos";

function Dictionary(props) {
  const [keyword, setKeyword] = useState(props.default);
  const [results, setResults] = useState(null);
  const [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function searchInDictionary() {
    requestWordData(keyword, handleDictionaryResponse);
  }

  function searchPhotos() {
    requestPhotos(keyword, handlePexelsResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    searchInDictionary();
    searchPhotos();
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
      <button className="btn search-button">Search</button>
    </form>
  );

  if (results) {
    return (
      <div className="Dictionary">
        <div>{searchForm}</div>

        <section>
          <h3 className="keyword">• {results.word} •</h3>
          {results.phonetics
            .filter((pronunciation) => pronunciation.text)
            .map((pronunciation, index) => (
              <div key={index}>
                <Pronunciation pronunciation={pronunciation} />
              </div>
            ))}
        </section>
        <section>
          <Photos photos={photos} />
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
    searchInDictionary();
    searchPhotos();
    return null;
  }
}

export default Dictionary;
