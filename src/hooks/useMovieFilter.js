// import { useQuery } from "@tanstack/react-query";
// import { api } from "../utils/api";

// const fetchGenresMovieList = () => {
//   return api.get(`/genre/movie/list`);
// };

// export const useGenresQuery = () => {
//   return useQuery({
//     queryKey: ["movie-genres"],
//     queryFn: fetchGenresMovieList,
//     select: (result) => result.data.genres,
//     staleTime: 300000,
//   });
// };
