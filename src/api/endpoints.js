export const ENDPOINTS = {
  // Movies
  POPULAR_MOVIES: '/movie/popular',
  TRENDING_MOVIES: '/trending/movie/week',
  TOP_RATED_MOVIES: '/movie/top_rated',
  BACKDROP_MOVIES: '/movie/popular',
  MOVIE_DETAILS: (id) => `/movie/${id}`,
  
  // TV Shows
  POPULAR_TV: '/tv/popular',
  TV_DETAILS: (id) => `/tv/${id}`,
  
  // Search
  SEARCH_MULTI: '/search/multi',
  
  // Person
  PERSON_DETAILS: (id) => `/person/${id}`,
};