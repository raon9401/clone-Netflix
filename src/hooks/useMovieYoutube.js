import { useQuery } from "@tanstack/react-query";
import { api } from "../utils/api";

const fetchuseMovieYoutubeId = ({ id }) => {
  return api.get(`movie/${id}/videos`);
};

export const useMovieYoutubeIdQuery = ({ id }) => {
  return useQuery({
    queryKey: ["movie-youtube-id", id],
    queryFn: () => fetchuseMovieYoutubeId({ id }),
    select: (result) => result.data.results,
  });
};
