import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchPopularMovies = () => {
  return api.get(`/movie/popular`);
};

const fetchGenresMovieList = () => {
  return api.get(`/genre/movie/list`);
};

export const usePopularMoviesQuery = () => {
  return useQuery({
    queryKey: ["movie-popular"],
    queryFn: fetchPopularMovies,
    select: (result) => result.data,
  });
};

export const useGenresQuery = () => {
  return useQuery({
    queryKey: ["movie-genres"],
    queryFn: fetchGenresMovieList,
    select: (result) => result.data,
  });
};
