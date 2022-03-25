import axios from "axios";
import { SUBURBS_ENDPOINT } from "../constants/url";

export const getSuburbs = async (query: string) => {
  try {
    return await axios.get(`${SUBURBS_ENDPOINT}?q=${query}`);
  }
  catch (error) {
    console.error(error);
  }
};
