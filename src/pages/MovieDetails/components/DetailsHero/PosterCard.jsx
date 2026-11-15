export default function PosterCard({ movie }) {
    if (!movie) return null;

    return (
        <div className="relative group w-full max-w-70 rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.5)] border border-white/10 bg-neutral-900 mb-6 transition-transform duration-300 hover:scale-[1.02]">
            <img
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-auto object-cover" 
            />
            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        </div>
    );
}