import axios from "axios";

function requestWordData(keyword, handleResponse) {
  const dictionaryApiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
  axios.get(dictionaryApiUrl).then(handleResponse);
}

export default requestWordData;
