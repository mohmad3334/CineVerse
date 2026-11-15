export default function PersonPoster({ person }) {
    return (
        <div className="w-full flex flex-col gap-4">
            <div className="sticky aspect-2/3 w-full overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur-md">
                <img 
                    src={person?.profile_path ? `https://image.tmdb.org/t/p/w500${person.profile_path}` : "https://via.placeholder.com/500x750?text=No+Image"} 
                    alt={person?.name || "Person"} 
                    className="h-full w-full object-cover transition-transform duration-300 hover:scale-105" 
                />
            </div>
        </div>
    );
}