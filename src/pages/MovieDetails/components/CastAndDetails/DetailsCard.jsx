import { Activity, Globe, DollarSign, TrendingUp, Building2, Clapperboard } from "lucide-react";

export default function DetailsCard({ movie }) {
    if (!movie) return null;

    return (
        <div className="w-full max-w-sm bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-6 flex flex-col gap-5 text-white shadow-xl">
            <h2 className="text-xl font-bold tracking-wide border-b border-white/10 pb-3 flex items-center gap-2">
                <Clapperboard className="text-red-500"/> Movie Details
            </h2>

            <div className="flex flex-col gap-4 text-sm">
                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                        <Activity size={16} className="text-red-500" /> Status
                    </span>
                    <span className="font-semibold px-2.5 py-1 rounded-md bg-white/10 text-white text-xs">
                        {movie.status || "N/A"}
                    </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                        <Globe size={16} className="text-blue-400" /> Language
                    </span>
                    <span className="font-semibold uppercase px-2.5 py-1 rounded-md bg-white/10 text-white text-xs">
                        {movie.original_language || "N/A"}
                    </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                        <DollarSign size={16} className="text-green-400" /> Budget
                    </span>
                    <span className="font-semibold text-green-400">
                        {movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}
                    </span>
                </div>

                <div className="flex justify-between items-center py-1.5 border-b border-white/5">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                        <TrendingUp size={16} className="text-emerald-400" /> Revenue
                    </span>
                    <span className="font-semibold text-emerald-400">
                        {movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}
                    </span>
                </div>

                <div className="flex flex-col gap-2 pt-2">
                    <span className="text-gray-400 font-medium flex items-center gap-2">
                        <Building2 size={16} className="text-purple-400" /> Production Companies
                    </span>
                    <div className="flex flex-wrap gap-2 mt-1">
                        {movie.production_companies && movie.production_companies.length > 0 ? (
                            movie.production_companies.map((company) => (
                                <span 
                                    key={company.id} 
                                    className="text-xs bg-white/10 text-gray-200 border border-white/10 px-3 py-1.5 rounded-lg font-medium"
                                >
                                    {company.name}
                                </span>
                            ))
                        ) : (
                            <span className="text-xs text-gray-500">N/A</span>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}