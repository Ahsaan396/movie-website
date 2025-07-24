import { createContext,useState,useEffect,useContext } from "react";
const MovieContext=createContext();
export const useMovieContext=() => useContext(MovieContext);
export const MovieProvider= ({children})=>{
    const [favorite,setFavorite]=useState([]);
    useEffect(()=>{
        const storeFav=localStorage.getItem("favorite");
        if(storeFav){
            setFavorite(JSON.parse(storeFav));//converted to array.. from ['1','1'] to [1,1]
        }
    },[])
    useEffect(()=>{
        localStorage.setItem("favorite",JSON.stringify(favorite))//converted to string
    },[favorite])

    //adding fav movies
    const addToFavorite=(movie)=>{
        setFavorite(prev=>[...prev,movie]);//...prev means currently how many movies i have and then i added a new movie.
    }
    const removeFromFavorite=(movieId)=>{
        setFavorite(prev=>prev.filter(movie=>movie.id !== movieId))
    }
    const isFavorite=(movieId)=>{
        return favorite.some(movie=>movie.id === movieId)
    }
    const value = {
        favorite,
        isFavorite,
        removeFromFavorite,
        addToFavorite
    }
    return <MovieContext.Provider value={value}>
        {children}
    </MovieContext.Provider>
}