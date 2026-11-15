import { getTrendingMovies } from "../../../api/movies.api"
import { useEffect, useState } from "react"
import MovieCard from "../../../components/movie/MovieCard"

export default function TrendingMovies({}) {
    const [Row, setRows] = useState([])
    useEffect(()=>{
        getTrendingMovies()
        .then( (res) => setRows(res) )
        .catch( (err) => console.error(err))
    },[])
    return(
        <div className="flex flex-col w-full justify-start items-start px-4">
            <h2 className="font-display text-3xl tracking-wide text-white mb-4">Trending Movies</h2>
            <div className="flex w-full justify-start items-center gap-4 overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-red-600 scrollbar-track-transparent py-3">
                {
                    Row.map((movie) => (
                        <div key={movie.id} className="w-40 shrink-0 md:w-48">
                            <MovieCard movie={movie} />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}