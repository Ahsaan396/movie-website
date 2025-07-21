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
                        className={`favorite-btn ${isFavorite(movie.id) ? 'active' : ''}`}

                        onClick={handleFavClick}
                    >
                        ❤️
                    </button>
                </div>
            </div>
            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.released_date?.split("-")[0]}</p>
            </div>
        </div>
    );
}
export default MovieCard;
