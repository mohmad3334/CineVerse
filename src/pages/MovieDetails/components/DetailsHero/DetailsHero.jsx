import PosterCard from "./PosterCard";
import TrailerButton from "./TrailerButton";
import MovieInfo from "./MovieInfo";

export default function DetailsHero({ movie }) {
    if (!movie) {
        return <div className="bg-[#0b0f19] min-h-screen w-full flex justify-center items-center text-white">Loading...</div>;
    }

    return (
        <div className="min-h-screen w-full flex flex-col lg:flex-row justify-between items-center lg:items-start gap-8 px-4 md:px-8 py-10">
            <div className="w-full lg:w-[30%] flex flex-col items-center justify-center">
                <PosterCard movie={movie} />
                <TrailerButton movie={movie} />
            </div>
            <div className="w-full lg:w-[65%] flex flex-col items-start justify-center">
                <MovieInfo movie={movie} />
            </div>
        </div>
    );
}