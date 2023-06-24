import axios from "axios";
import { DICTIONARY_API_URL } from "../config";

async function getDictionaryData(keyword) {
  const response = await axios.get(DICTIONARY_API_URL + keyword);
  return response;
}

export default getDictionaryData;
