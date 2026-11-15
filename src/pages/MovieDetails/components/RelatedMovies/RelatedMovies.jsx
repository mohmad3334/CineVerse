import { Link } from "react-router-dom";
import { Clapperboard, ImageOff, Play, Star } from "lucide-react";

const POSTER_URL = "https://image.tmdb.org/t/p/w500";

export default function RelatedMovies({ movie }) {
    const movies = movie?.recommendations?.results?.slice(0, 10) ?? [];

    if (movies.length === 0) {
        return null;
    }

    return (
        <section className="m-8 w-[calc(100%-4rem)] rounded-2xl border border-white/10 bg-white/5 p-5 text-white backdrop-blur-md sm:p-6">
            <h2 className="flex items-center gap-2 border-b border-white/10 pb-3 text-xl font-bold tracking-wide">
                <Clapperboard className="h-5 w-5 text-red-500" />
                Recommended Movies
            </h2>

            <div className="mt-5 flex gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent">
                {movies.map((item) => {
                    const year = item.release_date?.slice(0, 4);
                    const rating = item.vote_average > 0 ? item.vote_average.toFixed(1) : null;

                    return (
                        <Link
                            key={item.id}
                            to={`/movie/${item.id}`}
                            title={item.title}
                            className="group flex flex-col gap-3 rounded-xl outline-none min-w-[150px] max-w-[150px] sm:min-w-[180px] sm:max-w-[180px] focus-visible:ring-2 focus-visible:ring-red-500 shrink-0"
                        >
                            <div className="relative aspect-[2/3] overflow-hidden rounded-xl border border-white/10 bg-neutral-900 shadow-lg shadow-black/40 transition duration-300 group-hover:-translate-y-1 group-hover:border-red-500/60 group-hover:shadow-red-500/20">
                                {item.poster_path ? (
                                    <img
                                        src={`${POSTER_URL}${item.poster_path}`}
                                        alt={item.title}
                                        loading="lazy"
                                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                ) : (
                                    <div className="flex h-full w-full flex-col items-center justify-center gap-2 text-slate-500">
                                        <ImageOff className="h-8 w-8" />
                                        <span className="text-xs">No image</span>
                                    </div>
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                                <span className="absolute inset-0 m-auto flex h-12 w-12 scale-75 items-center justify-center rounded-full bg-red-600 text-white opacity-0 shadow-lg shadow-red-600/40 transition duration-300 group-hover:scale-100 group-hover:opacity-100">
                                    <Play className="ml-0.5 h-5 w-5 fill-current" />
                                </span>

                                {rating && (
                                    <span className="absolute left-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-1 text-xs font-semibold text-white backdrop-blur-sm">
                                        <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                                        {rating}
                                    </span>
                                )}
                            </div>

                            <div className="flex flex-col gap-0.5 px-0.5">
                                <h3 className="line-clamp-1 text-sm font-semibold text-slate-100 transition-colors group-hover:text-red-400">
                                    {item.title}
                                </h3>
                                {year && <span className="text-xs text-slate-400">{year}</span>}
                            </div>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
}