import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../api/movies.api";
import { useEffect, useState } from "react";

import DetailsHero from "./components/DetailsHero/DetailsHero";
import CastAndDetails from "./components/CastAndDetails/CastAndDetails";
import RelatedMovies from "./components/RelatedMovies/RelatedMovies";

export default function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
            try {
                const movieData = await getMovieDetails(id);
                setMovie(movieData);
            } catch (error) {
                console.error('Error fetching movie details:', error);
            }
        };

        fetchMovieDetails();
    }, [id]);

    if (!movie) {
        return <div className="bg-[#0b0f19] min-h-screen w-full flex justify-center items-center text-white">Loading...</div>;
    }

    return (
        <div className="relative min-h-screen w-full bg-[#0b0f19] text-white overflow-x-hidden">
            
            <div 
                className="fixed inset-0 bg-cover bg-center z-0 opacity-40"
                style={{
                    backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                }}
            ></div>

            <div className="fixed inset-0 bg-linear-to-t from-[#0b0f19] via-[#0b0f19]/80 to-[#0b0f19]/50 z-0"></div>

            <div className="relative z-10 w-full flex flex-col gap-8">
                <DetailsHero movie={movie} />
                <CastAndDetails movie={movie} />
                <RelatedMovies movie={movie} />
            </div>

        </div>
    );
}