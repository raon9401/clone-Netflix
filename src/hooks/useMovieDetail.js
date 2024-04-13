import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchMovieDetail = ({ id }) => {
  return api.get(`/movie/${id}`);
};

export const useMovieDetailQuery = ({ id }) => {
  console.log(id);
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => fetchMovieDetail({ id }),
    select: (result) => result.data,
  });
};
