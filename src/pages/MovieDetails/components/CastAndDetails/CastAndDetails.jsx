import CastCard from "./CastCard";
import DetailsCard from "./DetailsCard";

export default function CastAndDetails({ movie }) {
    if (!movie) return null;

    return (
        <div className="min-h-max w-full px-4 md:px-8 py-6 flex flex-col lg:flex-row justify-between items-stretch lg:items-start gap-8">
            <div className="w-full lg:w-[65%]">
                <CastCard movie={movie} />
            </div>
            <div className="w-full lg:w-[32%] flex justify-center lg:justify-end">
                <DetailsCard movie={movie} />
            </div>
        </div>
    );
}