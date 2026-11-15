import { useEffect } from "react";
import { getPopularMovies } from './api/movies.api'
import Navbar from './components/layout/Navbar';
import Footer from "./components/layout/Footer";
import AppRoutes from './routes/AppRoutes';

function App() {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const movies = await getPopularMovies();
        console.log(movies[5]);
      } catch (error) {
        console.error('Error fetching movies:', error);
      }
    };

    fetchMovies();
  }, []);

  return(
    <div className="min-h-screen w-full bg-black flex items-center justify-center flex-col">
      <Navbar />
      <AppRoutes />
      <Footer />
    </div>

  );
}

export default App;