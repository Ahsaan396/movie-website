import MovieCard from "../components/MovieCard";
import { useState } from "react";
import '../css/Home.css';

function Home() {
    const movies = [
        { id: 1, title: "John Wick", released_date: "2025" },
        { id: 2, title: "Game of Thrones", released_date: "2010" },
        { id: 3, title: "Titanic", released_date: "2020" }
    ];
    const [searchQuery, setSearchQuery]=useState("");
    const handleSearch= (e) =>{
        e.preventDefault();
        alert(searchQuery);
        setSearchQuery("-----");
    };
    return (
        <div className="home">
            <form onSubmit={handleSearch} className="search-form">
                <input type="text" 
                placeholder="Search for movies ..." 
                className="search-input"
                value={searchQuery}
                onChange={(e)=>setSearchQuery(e.target.value)}
                
                />
                <button type="submit" className="search-btn">Search</button>
            </form>
            <div className="movies-grid">
                {movies.map((movie) => (
                    movie.title.toLowerCase().startsWith(searchQuery) && <MovieCard movie={movie} key={movie.id} />
                ))}
            </div>
        </div>
    );

}
export default Home