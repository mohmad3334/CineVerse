import { Play } from "lucide-react";

export default function TrailerButton({ movie }) {
    const trailer = movie?.videos?.results?.find(
        (vid) => vid.type === "Trailer" && vid.site === "YouTube"
    ) || movie?.videos?.results?.[0];

    const handleWatch = () => {
        if (trailer) {
            window.open(`https://www.youtube.com/watch?v=${trailer.key}`, "_blank");
        } else {
            alert("Trailer not available");
        }
    };

    return (
        <button
            onClick={handleWatch}
            className="w-full max-w-[280px] flex items-center justify-center gap-3 py-3.5 px-6 rounded-xl bg-white/10 hover:bg-red-600 text-white font-semibold backdrop-blur-md border border-white/20 transition-all duration-300 shadow-lg hover:shadow-red-600/40 hover:border-red-500 cursor-pointer group"
        >
            <span className="flex items-center justify-center w-7 h-7 rounded-full bg-white/20 group-hover:bg-white group-hover:text-red-600 text-white transition-colors duration-300">
                <Play size={14} className="fill-current" />
            </span>
            <span className="tracking-wide">Watch Trailer</span>
        </button>
    );
}