import { Link } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w500';

export default function MovieCard({ movie }) {
    const year = movie.release_date?.slice(0, 4);

    return (
        <Link
            to={`/movie/${movie.id}`}
            className="group relative block aspect-2/3 overflow-hidden rounded-xl bg-[#151a27] shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-black/50"
        >
            {movie.poster_path ? (
                <img
                    src={`${IMAGE_URL}${movie.poster_path}`}
                    alt={movie.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
            ) : (
                <div className="flex h-full w-full items-center justify-center text-sm text-gray-500">
                    No Poster
                </div>
            )}

            {movie.vote_average > 0 && (
                <span className="absolute left-2 top-2 rounded-md bg-black/70 px-2 py-1 text-xs font-semibold text-[#FBBF24] backdrop-blur-sm">
                    ★ {movie.vote_average.toFixed(1)}
                </span>
            )}

            <div className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 transition duration-300 group-hover:opacity-100">
                <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#E11D48] pl-1 text-white">
                    ▶
                </span>
            </div>

            <div
                className="absolute inset-x-0 bottom-0 p-3 pt-16"
                style={{
                    background: `linear-gradient(to top,
                        rgba(11,15,25,0.95) 0%,
                        rgba(11,15,25,0.6) 45%,
                        rgba(11,15,25,0) 100%)`,
                }}
            >
                <h3 className="line-clamp-1 text-sm font-semibold text-white">{movie.title}</h3>
                {year && <p className="text-xs text-gray-400">{year}</p>}
            </div>
        </Link>
    );
}