import '../css/MovieCard.css';
import { useMovieContext } from '../contexts/MovieContext';

export function MovieCard({ movie }) {
    const { isFavorite, addToFavorite, removeFromFavorite } = useMovieContext();

    const handleFavClick = (e) => {
        e.preventDefault();
        isFavorite(movie.id)
            ? removeFromFavorite(movie.id)
            : addToFavorite(movie);
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img
                    src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                    alt={movie.title}
                />
                <div className="movie-overlay">
                    <button
                        onClick={handleFavClick}
                        className={`favorite-btn ${isFavorite(movie.id) ? 'active' : ''}`}
                        title={isFavorite(movie.id) ? 'Saved' : 'Save'}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill={isFavorite(movie.id) ? 'white' : 'none'}
                            stroke={isFavorite(movie.id) ? 'white' : '#e63946'}
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                        </svg>
                    </button>

                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>
                    {movie.release_date
                        ? new Date(movie.release_date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric'
                        })
                        : "Release date unknown"}
                </p>
            </div>
        </div>
    );
}
export default MovieCard;
