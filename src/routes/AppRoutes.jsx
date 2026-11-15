import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home/Home";
import MovieDetails from "../pages/MovieDetails/MovieDetails";
import PersonDetails from "../pages/PersoneDetails/PersonDetails";

export default function AppRoutes() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetails />} />
            <Route path="/person/:id" element={<PersonDetails />} />
            <Route path="/movies" element={<h1 className="p-8 text-white">Coming Soon...</h1>} />
            <Route path="/search" element={<h1 className="p-8 text-white">Coming Soon...</h1>} />
            <Route path="/watchlist" element={<h1 className="p-8 text-white">Coming Soon...</h1>} />
            <Route path="*" element={<h1 className="p-8 text-white">404 - Page not found</h1>} />
        </Routes>
    );
}