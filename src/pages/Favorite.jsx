import '../css/Favorite.css'
import { useMovieContext } from '../contexts/MovieContext';
import MovieCard from '../components/MovieCard';
function Favorite() {
    const { favorite } = useMovieContext();
    if (favorite.length>0) {
        return(
        <div className='favorites'>
            <h2>Your Favorites</h2>
            <div className="movies-grid">
                {favorite.map((movie) => (
                    <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
        );
    }
    return (
        <div className="favorites-empty">
            <h2>No Favorite movies yet</h2>
            <p>Start adding movies here to your favorirtes and they will appear here..</p>
        </div>
    );
}
export default Favorite