import Hero from "./Hero/Hero";
import PopularMovies from "./Movie/PopularMovies";
import TrendingMovies from "./Movie/TrendingMovies";
import TopRatedMovies from "./Movie/TopRatedMovies";
export default function Home(){
    return(
        <div className="min-h-screen w-full bg-[#0B0F19] flex items-center justify-center flex-col">
            <Hero />
            <div className="flex flex-col w-full h-max justify-start items-start px-4 py-4">
                <PopularMovies />
                <TrendingMovies />
                <TopRatedMovies />
            </div>
        </div>
    )
}