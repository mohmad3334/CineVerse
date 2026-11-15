import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../../../api/movies.api';

const GENRES = {
    28: 'Action', 12: 'Adventure', 16: 'Animation', 35: 'Comedy',
    80: 'Crime', 99: 'Documentary', 18: 'Drama', 10751: 'Family',
    14: 'Fantasy', 36: 'History', 27: 'Horror', 10402: 'Music',
    9648: 'Mystery', 10749: 'Romance', 878: 'Sci-Fi', 10770: 'TV Movie',
    53: 'Thriller', 10752: 'War', 37: 'Western',
};

export default function Hero() {
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        getTrendingMovies()
            .then((data) => {
                if (data && data.length > 0) {
                    setMovie(data[0]);
                }
            })
            .catch((err) => console.error(err));
    }, []);


    if (!movie) {
        return <div className="min-h-screen bg-black">Loading...</div>;
    }

    const genres = (movie.genre_ids ?? []).map((id) => GENRES[id]).filter(Boolean).slice(0, 3);
    const year = movie.release_date?.slice(0, 4);

    return (
        <div 
            className="hero w-full min-h-screen bg-cover bg-center relative" 
            style={{ 
                backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
                boxShadow: `
                    inset 350px 0 200px -100px #0b0f19,
                    inset 0 -250px 200px -80px #0b0f19,
                    inset 0 120px 100px -90px rgba(11, 15, 25, 0.8)
                `
            }}
        >
            <div className="flex min-h-screen max-w-2xl flex-col justify-center gap-5 px-6 pt-24 md:px-16">

                <div className="flex items-center gap-3 text-sm text-gray-300">
                    <span className="flex items-center gap-1 font-semibold text-[#FBBF24]">
                        ★ {movie.vote_average.toFixed(1)}
                    </span>
                    {year && <span>{year}</span>}
                    <span className="text-gray-500">•</span>
                    <span>{movie.vote_count} votes</span>
                </div>

                <h1 className="font-display text-5xl leading-none tracking-wide text-white md:text-7xl">
                    {movie.title}
                </h1>

                <div className="flex flex-wrap gap-2">
                    {genres.map((genre) => (
                        <span
                            key={genre}
                            className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-white backdrop-blur"
                        >
                            {genre}
                        </span>
                    ))}
                </div>

                <p className="line-clamp-4 text-[17px] leading-relaxed text-gray-300 md:text-lg">
                    {movie.overview}
                </p>
                <Link
                    to={`/movie/${movie.id}`}
                    className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-red-600 to-rose-600 px-7 py-3.5 text-base font-bold text-white shadow-lg shadow-red-600/30 backdrop-blur-md transition-all duration-300 hover:scale-105 hover:shadow-red-600/50 hover:from-red-500 hover:to-rose-500 active:scale-95"
                >
                    <span>▶</span> Watch Now
                </Link>
            </div>
        </div>
    );
}