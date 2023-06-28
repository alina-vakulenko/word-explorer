import axios from "axios";
import {
  DICTIONARY_API_URL,
  DICTIONARY_API_KEY,
  DICTIONARY_API_HOST,
} from "../config";

const httpClient = axios.create({
  baseURL: DICTIONARY_API_URL,
  headers: {
    "X-RapidAPI-Key": DICTIONARY_API_KEY,
    "X-RapidAPI-Host": DICTIONARY_API_HOST,
  },
});

async function getDictionaryData(keyword) {
  const response = await httpClient.get(keyword);
  return response;
}

export default getDictionaryData;
