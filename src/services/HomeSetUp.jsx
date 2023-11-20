import { useQueries, useQuery } from "@tanstack/react-query";
import { HomeQueryKeys } from "../data/QueryKeys";
import { fetcher, fetcherDetailedList } from "../utils/Fetcher";

export const useFetchAllPokeList = () => {
  return useQuery({
    queryKey: [HomeQueryKeys.setUp.fetchAllPokemonList],
    queryFn: () => fetcher(`pokemon`),
  });
};

export const useFetchUrlList = (data) => {
  const queryData = data?.map((pokemon) => {
    return {
      queryKey: [HomeQueryKeys.setUp.fetchAllPokemonSingleList, pokemon.name],
      queryFn: () => fetcher(pokemon.url),
    };
  });
  const pokeData = queryData ? queryData : [];

  return useQueries({ queries: pokeData });
};

export const useFetchPokeMonByGen = (id) => {
  return useQuery({
    queryKey: [HomeQueryKeys.setUp.fetchPokeMonByGen, id],
    queryFn: () => fetcher(`generation/${id}`),
  });
};

export const useFetchUrlDetailList = (data) => {
  const queryData = data?.map((pokemon) => {
    return {
      queryKey: [
        HomeQueryKeys.setUp.fetchPokeMonDetailedList,
        pokemon?.data?.id,
      ],
      queryFn: () =>
        fetcherDetailedList(pokemon.data?.varieties?.[0]?.pokemon.url),
    };
  });
  const pokeData = queryData ? queryData : [];

  return useQueries({ queries: pokeData });
};
