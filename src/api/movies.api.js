import tmdb from '../api/axiosInstance';
import { ENDPOINTS } from '../api/endpoints';

export const getPopularMovies = async () => {
    const response = await tmdb.get(ENDPOINTS.POPULAR_MOVIES);
    return response.data.results;
};
export const getTrendingMovies = async () => {
    const response = await tmdb.get(ENDPOINTS.TRENDING_MOVIES);
    return response.data.results;
};
export const getTopRatedMovies = async () => {
    const response = await tmdb.get(ENDPOINTS.TOP_RATED_MOVIES);
    return response.data.results;
}
export const getMovieDetails = (id) => {
    return tmdb
    .get(`/movie/${id}`, {
        params: { append_to_response: "videos,credits,recommendations" },
    })
    .then((res) => res.data)
}


export const getBackDropMovies = async () => {
    const response = await tmdb.get(ENDPOINTS.BACKDROP_MOVIES);
    return response.data.results;
}