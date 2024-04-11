import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchSearchMovie = ({ sortKeyword, sortPage }) => {
  return sortKeyword
    ? api.get(`/discover/movie?page=${sortPage}&sort_by=${sortKeyword}`)
    : api.get(`/movie/popular?page=${sortPage}`);
};

export const useSortMovieQuery = ({ sortKeyword, sortPage }) => {
  return useQuery({
    queryKey: ["movie-sort", { sortKeyword, sortPage }],
    queryFn: () => fetchSearchMovie({ sortKeyword }),
    select: (result) => result.data,
  });
};
