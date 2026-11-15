import PersonPoster from "./PersonPosterSide/PersonPoster";
import PersonInfos from "./PersonInfosSide/PersonInfos";
import PersonMovies from "./PersonMovies/PersonMovies";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function PersonDetails() {
    const { id } = useParams();
    const [personData, setPersonData] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPersonData = async () => {
            try {
                const response = await fetch(
                    `https://api.themoviedb.org/3/person/${id}?api_key=${import.meta.env.VITE_TMDB_API_KEY}&append_to_response=movie_credits`
                );
                const data = await response.json();
                setPersonData(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching person data:", error);
                setLoading(false);
            }
        };

        if (id) {
            fetchPersonData();
        }
    }, [id]);

    if (loading) {
        return (
            <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center">
                Loading person details...
            </div>
        );
    }

    if (!personData) {
        return (
            <div className="min-h-screen bg-[#0b0f19] text-white flex items-center justify-center">
                Person not found.
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0b0f19] text-white px-4 md:px-12 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                
                <div className="lg:col-span-1">
                    <PersonPoster person={personData} />
                </div>

                <div className="lg:col-span-3 flex flex-col gap-8">
                    <PersonInfos person={personData} />
                    <PersonMovies credits={personData.movie_credits} />
                </div>

            </div>
        </div>
    );
}