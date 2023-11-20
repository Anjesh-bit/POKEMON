import axiosBaseUri from "./AxiosBaseUri";
import axios from "axios";
const pokeList = axiosBaseUri("https://pokeapi.co/api/v2/");

export const fetcher = async (url) => {
  const { data } = await pokeList.get(url);
  return data;
};

export const fetcherDetailedList = async (url) => {
  const { data } = await axios.get(url);
  return data;
};
