import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";
import logoIcon from "../../assets/logo.svg";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full h-20 flex items-center justify-between px-6 md:px-12 backdrop-blur-md bg-black/40 border-b border-white/10 text-white sticky top-0 z-50">
            <Link to="/" className="flex items-center gap-3 group">
                <img src={logoIcon} alt="CineVerse" className="w-32 md:w-40 object-contain transition-transform group-hover:scale-105" />
            </Link>

            <nav className="hidden md:flex items-center gap-8 font-medium text-sm">
                <Link to="/" className="text-gray-300 hover:text-red-500 transition-colors">
                    Home
                </Link>
                <Link to="/movies" className="text-gray-300 hover:text-red-500 transition-colors">
                    Movies
                </Link>
                <Link to="/watchlist" className="text-gray-300 hover:text-red-500 transition-colors">
                    Watchlist
                </Link>
            </nav>

            <div className="hidden md:flex items-center gap-4">
                <Link to="/search" className="flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 border border-white/10 px-4 py-2 rounded-xl transition-all">
                    <Search size={16} /> Search
                </Link>
            </div>

            <div className="flex md:hidden items-center gap-3">
                <Link to="/search" className="flex items-center justify-center bg-white/10 p-2 rounded-xl border border-white/10">
                    <Search size={18} />
                </Link>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className="p-2 rounded-xl bg-white/10 border border-white/10 text-white focus:outline-none"
                >
                    {isOpen ? <X size={22} /> : <Menu size={22} />}
                </button>
            </div>

            {isOpen && (
                <div className="absolute top-20 left-0 w-full bg-[#0b0f19]/95 backdrop-blur-xl border-b border-white/10 py-6 px-6 flex flex-col gap-4 md:hidden shadow-2xl transition-all">
                    <Link 
                        to="/" 
                        onClick={() => setIsOpen(false)} 
                        className="text-gray-300 hover:text-red-500 text-base font-medium py-2 border-b border-white/5"
                    >
                        Home
                    </Link>
                    <Link 
                        to="/movies" 
                        onClick={() => setIsOpen(false)} 
                        className="text-gray-300 hover:text-red-500 text-base font-medium py-2 border-b border-white/5"
                    >
                        Movies
                    </Link>
                    <Link 
                        to="/watchlist" 
                        onClick={() => setIsOpen(false)} 
                        className="text-gray-300 hover:text-red-500 text-base font-medium py-2"
                    >
                        Watchlist
                    </Link>
                </div>
            )}
        </header>
    );
}