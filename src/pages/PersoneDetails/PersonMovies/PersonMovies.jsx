import { Link } from "react-router-dom";
import { Clapperboard, Star } from "lucide-react";

export default function PersonMovies({ credits }) {
    if (!credits || (!credits.cast?.length && !credits.crew?.length)) return null;

    const movies = credits.cast || [];

    return (
        <div className="flex flex-col gap-5 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-xl text-white">
            <h2 className="flex items-center gap-2 border-b border-white/10 pb-3 text-xl font-bold tracking-wide">
                <Clapperboard className="h-5 w-5 text-red-500" /> Known For (Movies)
            </h2>

            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                {movies.map((movie) => (
                    <Link 
                        to={`/movie/${movie.id}`} 
                        key={movie.id} 
                        className="group flex flex-col gap-2 rounded-xl bg-neutral-900/50 p-2.5 border border-white/10 hover:border-red-500/50 transition-all"
                    >
                        <div className="relative aspect-[2/3] overflow-hidden rounded-lg bg-neutral-800">
                            {movie.poster_path ? (
                                <img 
                                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                                    alt={movie.title} 
                                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" 
                                />
                            ) : (
                                <div className="flex h-full w-full items-center justify-center text-xs text-gray-500">
                                    No Image
                                </div>
                            )}

                            {movie.vote_average > 0 && (
                                <span className="absolute top-2 left-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-xs font-semibold text-amber-400 backdrop-blur-sm">
                                    <Star size={10} className="fill-current" /> {movie.vote_average.toFixed(1)}
                                </span>
                            )}
                        </div>

                        <div className="flex flex-col">
                            <h4 className="text-xs font-bold text-white line-clamp-1 group-hover:text-red-400 transition-colors">
                                {movie.title}
                            </h4>
                            <span className="text-[10px] text-gray-400 line-clamp-1">
                                {movie.character ? `Role: ${movie.character}` : "Crew"}
                            </span>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}