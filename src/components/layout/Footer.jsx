import { Link } from "react-router-dom";
import { Heart, Mail } from "lucide-react";
import logoIcon from "../../assets/logo.svg";

export default function Footer() {
    return (
        <footer className="w-full z-50 bg-[#0b0f19] text-gray-400 border-t border-white/10 mt-20 py-12 px-4 md:px-12">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                
                <div className="flex flex-col gap-4 md:col-span-1">
                    <Link to="/" className="flex items-center gap-2 text-white text-xl font-extrabold tracking-wider">
                        <img src={logoIcon} alt="CineVerse" className="w-40 object-contain transition-transform group-hover:scale-105" />
                    </Link>
                    <p className="text-sm text-gray-400 leading-relaxed">
                        Your ultimate cinematic universe to discover, explore, and track your favorite movies and TV shows powered by TMDB.
                    </p>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Quick Links</h4>
                    <Link to="/" className="text-sm hover:text-red-400 transition-colors">Home</Link>
                    <Link to="/movies" className="text-sm hover:text-red-400 transition-colors">Movies</Link>
                    <Link to="/watchlist" className="text-sm hover:text-red-400 transition-colors">Watchlist</Link>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Categories</h4>
                    <span className="text-sm hover:text-red-400 cursor-pointer transition-colors">Action & Adventure</span>
                    <span className="text-sm hover:text-red-400 cursor-pointer transition-colors">Sci-Fi & Fantasy</span>
                    <span className="text-sm hover:text-red-400 cursor-pointer transition-colors">Horror & Thriller</span>
                </div>

                <div className="flex flex-col gap-3">
                    <h4 className="text-white font-semibold text-sm tracking-wide uppercase">Connect</h4>
                    <p className="text-sm">Stay updated with the latest releases and cinematic trends.</p>
                    <div className="flex items-center gap-4 mt-2">
                        <a href="https://github.com/mohmad3334" target="_blank" rel="noreferrer" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all">
                            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
                            </svg>
                        </a>
                        <a href="mailto:benmoussa.mohamed.dev@gmail.com" className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all">
                            <Mail size={18} />
                        </a>
                    </div>
                </div>

            </div>

            <div className="max-w-7xl mx-auto border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500 gap-4">
                <p>© {new Date().getFullYear()} CineVerse. All rights reserved.</p>
                <p className="flex items-center gap-1">
                    Made with <Heart size={13} className="text-red-500 fill-current" /> using React & Tailwind
                </p>
            </div>
        </footer>
    );
}