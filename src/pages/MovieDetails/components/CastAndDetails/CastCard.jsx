import { Link } from "react-router-dom";
import { Users } from "lucide-react";

export default function CastCard({ movie }) {
    if (!movie?.credits?.cast) return null;

    return (
        <div className="w-full bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-5 text-white shadow-xl">
            <h2 className="text-xl font-bold tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                <Users className="text-red-500" size={20} /> Top Cast
            </h2>

            <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent">
                {movie.credits.cast.slice(0, 10).map((castMember) => (
                    <Link
                        to={`/person/${castMember.id}`}
                        key={castMember.id} 
                        className="flex flex-col items-center min-w-[90px] max-w-[90px] gap-2 text-center group cursor-pointer"
                    >
                        <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/20 group-hover:border-red-500 transition-all duration-300 shadow-md">
                            {castMember.profile_path ? (
                                <img
                                    src={`https://image.tmdb.org/t/p/w200${castMember.profile_path}`}
                                    alt={castMember.name}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                />
                            ) : (
                                <div className="w-full h-full bg-neutral-800 flex items-center justify-center text-xs text-gray-400">
                                    N/A
                                </div>
                            )}
                        </div>
                        <span className="text-xs font-semibold text-gray-200 line-clamp-1 group-hover:text-red-400 transition-colors">
                            {castMember.name}
                        </span>
                        <span className="text-[10px] text-gray-400 line-clamp-1">
                            {castMember.character}
                        </span>
                    </Link>
                ))}
            </div>
        </div>
    );
}