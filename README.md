# CineVerse 🎬

A cinematic movie discovery web app built with **React** and powered by the [TMDB API](https://www.themoviedb.org/). Browse popular, trending and top-rated movies, dive into movie details, and explore the people behind them.

> 🚧 **Work in progress.** Home, Movie Details and Person Details are done. Search, Movies and Watchlist are next. See the [Roadmap](#roadmap).

## Features

### Home
- Hero banner with the featured movie (rating, year, votes, genres, overview, **Watch Now**)
- Horizontally scrollable rows: **Popular**, **Trending** and **Top Rated** movies
- Movie cards with poster, rating badge, title and year

### Movie Details
- Backdrop, poster, title, tagline, release date, runtime, rating and genres
- Overview, director and writers, plus Website and IMDb links
- **Watch Trailer** (YouTube trailer in a modal)
- Top cast with photos and characters (links to the person page)
- Details card: status, language, budget, revenue and production companies
- Recommended movies

### Person Details
- Photo, biography and personal info (known for, birthday, place of birth, also known as)
- **Known For** grid with the movies the person appeared in and their role

### General
- Responsive layout, dark cinematic theme
- Shared navbar and footer
- Loading and error states, empty fields are hidden (for example a budget of 0)

## Tech Stack

| Area | Tool |
| --- | --- |
| UI | React |
| Build tool | Vite |
| Styling | Tailwind CSS v4 |
| Routing | React Router |
| HTTP | Axios |
| Icons | lucide-react |
| Data | TMDB API v3 |

## Getting Started

### Prerequisites
- Node.js 18+
- A free TMDB API key: <https://www.themoviedb.org/settings/api>

### Installation

```bash
git clone https://github.com/mohmad3334/CineVerse
cd CineVerse
npm install
```

### Environment variables

Create a `.env` file in the project root (use the same variable name your code reads):

```env
VITE_TMDB_TOKEN=your_tmdb_read_access_token_here
VITE_TMDB_API_KEY=your_tmdb_api_key_here
VITE_TMDB_BASE_URL=https://api.themoviedb.org/3
```

`.env` must be listed in `.gitignore`. Never commit your key.

> Note: Vite embeds `VITE_*` variables in the browser bundle, so the key is visible to anyone who opens DevTools. That is acceptable for a learning or portfolio project. For production, proxy TMDB requests through a small backend.

### Run

```bash
npm run dev      # start the dev server
npm run build    # production build
npm run preview  # preview the production build
```

## Routes

| Path | Page | Status |
| --- | --- | --- |
| `/` | Home | ✅ Done |
| `/movie/:id` | Movie Details | ✅ Done |
| `/person/:id` | Person Details | ✅ Done |
| `/search` | Search | 🚧 Planned |
| `/movies` | Movies list | 🚧 Planned |
| `/watchlist` | Watchlist | 🚧 Planned |
| `*` | 404 | Placeholder |

## TMDB endpoints used

- `GET /movie/popular`
- `GET /trending/movie/week`
- `GET /movie/top_rated`
- `GET /movie/{id}?append_to_response=videos,credits,recommendations`
- `GET /person/{id}?append_to_response=movie_credits`

Planned: `GET /search/multi` (Search page)

## Roadmap

- [ ] **Search** page (`/search?q=`) with results grid and empty state
- [ ] **Movies** page with category tabs (popular, top rated, upcoming) and pagination
- [ ] **Watchlist** saved in `localStorage`
- [ ] Proper 404 page
- [ ] Skeleton loaders

## Credits

This product uses the TMDB API but is not endorsed or certified by TMDB.

Made with ❤️ using React and Tailwind.