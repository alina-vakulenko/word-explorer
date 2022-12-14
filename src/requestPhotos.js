import axios from "axios";

function requestPhotos(keyword, handleResponse) {
  const pexelsApiKey =
    "563492ad6f917000010000012b1722232a9d4e41aa2e1d6f1d2625c5";
  const pexelsApiUrl = `https://api.pexels.com/v1/search?query=${keyword}&per_page=6`;
  axios
    .get(pexelsApiUrl, {
      headers: {
        Authorization: `Bearer ${pexelsApiKey}`,
      },
    })
    .then(handleResponse);
}

export default requestPhotos;
