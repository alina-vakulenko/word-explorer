import axios from "axios";
import { PHOTOS_API_BASE_URL, PHOTOS_API_KEY } from "../config";

const httpClient = axios.create({
  baseURL: PHOTOS_API_BASE_URL,
  headers: {
    Authorization: PHOTOS_API_KEY,
  },
});

async function getPhotos(keyword, perPage) {
  const response = await httpClient.get("/", {
    params: {
      query: keyword,
      per_page: perPage,
      orientation: "landscape",
    },
  });
  return response;
}

export default getPhotos;
