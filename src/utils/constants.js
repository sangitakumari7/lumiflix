export const GITHUB_URL = "https://avatars.githubusercontent.com/u/136090893?v=4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmOGNlYWY3NzIzYjE0NDU4ODI5MzcxZjEyNGUwMzM3YSIsIm5iZiI6MTc3NzQzNTQyMy4yMjg5OTk5LCJzdWIiOiI2OWYxODMxZmUwYzJmMTI0OGViY2I2NzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.SXhjwPHd2A-9Ig0jLCPketCnrfvaDslN7nftdN_W_dI'
  }
};

export const IMG_CDN_URL ="https://image.tmdb.org/t/p/w500"

export const SUPPORTED_LANGUAGES = [
  {identifier: "en" , name: "English"},
  {identifier: "hindi" , name: "Hindi"},
  {identifier: "spanish" , name: "Spanish"},
  {identifier: "french" , name: "French"}
]

export const OPTIONS_API_TMDB = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + import.meta.env.VITE_TMDB_API_READ_ACCESS_TOKEN,
  },
};

export const ONGOING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1";

export const POPULAR_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

export const TOP_RATED_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

export const UPCOMING_MOVIES_URL =
  "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

export const MOVIES_VIDEO_URL = "https://api.themoviedb.org/3/movie/";

export const TDMA_CDN_IMG_URL = "https://image.tmdb.org/t/p/w500";

export const MOVIE_SEARCH_DETAILS_TMDB_URL1 =
  "https://api.themoviedb.org/3/search/movie?query=";
export const MOVIE_SEARCH_DETAILS_TMDB_URL2 =
  "&include_adult=false&language=en-US&page=1";