import { Star, Calendar, Clock, Globe, Film } from "lucide-react";

export default function MovieInfo({ movie }) {
    if (!movie) return null;

    const director = movie.credits?.crew?.find((person) => person.job === "Director");
    const writers = movie.credits?.crew?.filter((person) => person.job === "Screenplay" || person.job === "Writer" || person.job === "Story");

    return (
        <div className="flex flex-col gap-4 text-white max-w-2xl">
            <div>
                <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide drop-shadow-md">
                    {movie.title}
                </h1>
                {movie.tagline && (
                    <p className="text-red-400 italic text-lg mt-1 font-medium">
                        "{movie.tagline}"
                    </p>
                )}
            </div>

            <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-300 font-medium">
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    <Calendar size={15} className="text-gray-400" /> {movie.release_date}
                </span>
                <span className="flex items-center gap-1.5 bg-white/10 px-3 py-1 rounded-full border border-white/10">
                    <Clock size={15} className="text-gray-400" /> {movie.runtime} min
                </span>
                <span className="flex items-center gap-1.5 bg-yellow-500/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-500/30 font-bold">
                    <Star size={15} className="fill-current text-yellow-400" /> 
                    {movie.vote_average?.toFixed(1)} 
                    <span className="text-xs text-gray-400 font-normal">({movie.vote_count} votes)</span>
                </span>
            </div>

            {movie.genres && (
                <div className="flex flex-wrap gap-2 mt-1">
                    {movie.genres.map((genre) => (
                        <span key={genre.id} className="text-xs bg-red-600/20 text-red-300 border border-red-500/30 px-3 py-1 rounded-md">
                            {genre.name}
                        </span>
                    ))}
                </div>
            )}

            <p className="text-gray-300 text-base md:text-lg leading-relaxed mt-2">
                {movie.overview}
            </p>

            <div className="flex flex-col gap-2 mt-2 pt-4 border-t border-white/10 text-sm text-gray-300">
                {director && (
                    <p><span className="font-semibold text-white">Director:</span> {director.name}</p>
                )}
                {writers && writers.length > 0 && (
                    <p><span className="font-semibold text-white">Writers:</span> {writers.map(w => w.name).join(", ")}</p>
                )}
            </div>

            <div className="flex items-center gap-4 mt-2">
                {movie.homepage && (
                    <a 
                        href={movie.homepage} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-red-600 hover:bg-red-700 text-white font-medium transition-all duration-300 shadow-lg shadow-red-600/30 text-sm flex items-center gap-2"
                    >
                        <Globe size={16} /> Website
                    </a>
                )}
                {movie.imdb_id && (
                    <a 
                        href={`https://www.imdb.com/title/${movie.imdb_id}`} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="px-5 py-2.5 rounded-xl bg-yellow-500 hover:bg-yellow-600 text-black font-bold transition-all duration-300 shadow-lg shadow-yellow-500/30 text-sm flex items-center gap-2"
                    >
                        <Star size={16} className="fill-current" /> IMDb
                    </a>
                )}
            </div>
        </div>
    );
}