import axios from "axios";
import { SUBURBS_ENDPOINT } from "../constants/url";
import { Item } from "../types/search";

const MAX_RESULTS = 5;

const matchStartOfName = (item: Item, query: string) => {
  const truncatedName = item.name.slice(0, query.length);
  return truncatedName.toLowerCase().indexOf(query.toLowerCase()) !== -1;
};

export const getSuburbs = async (query: string) => {
  try {
    const response = await axios.get(`${SUBURBS_ENDPOINT}?q=${query}`);
    return response?.data
      // TODO: (DK) Filter unique values.
      .filter((item: Item) => matchStartOfName(item, query))
      .slice(0, MAX_RESULTS)
      .reduce((acc: Item[], item: Item) => {
        return [...acc, {
          name: item.name,
          state: {
            abbreviation: item.state.abbreviation
          }
        }];
      }, []);
  }
  catch (error) {
    // TODO: (DK) Implement proper error handling.
    console.error(error);
  }
};
