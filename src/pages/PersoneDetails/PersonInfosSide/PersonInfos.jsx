export default function PersonInfos({ person }) {
    if (!person) return null;

    return (
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-xl text-white">
                <h1 className="text-3xl md:text-4xl font-extrabold tracking-wide">
                    {person.name}
                </h1>

                {person.biography && (
                    <div className="flex flex-col gap-2 mt-2">
                        <h3 className="text-lg font-semibold text-red-500">Biography</h3>
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                            {person.biography}
                        </p>
                    </div>
                )}
            </div>

            <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur-md shadow-xl text-white">
                <h3 className="text-lg font-bold border-b border-white/10 pb-3 text-white">
                    Personal Info
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 font-semibold">Known For</span>
                        <span className="text-sm text-gray-200">{person.known_for_department || "N/A"}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 font-semibold">Born</span>
                        <span className="text-sm text-gray-200">{person.birthday || "N/A"}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 font-semibold">Place of Birth</span>
                        <span className="text-sm text-gray-200">{person.place_of_birth || "N/A"}</span>
                    </div>

                    <div className="flex flex-col gap-1">
                        <span className="text-xs text-gray-400 font-semibold">Also Known As</span>
                        <span className="text-sm text-gray-200">
                            {person.also_known_as && person.also_known_as.length > 0 
                                ? person.also_known_as.join(", ") 
                                : "N/A"}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}