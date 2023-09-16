import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SecondaryContainer=()=>{

    const movies=useSelector(store=>store.movies?.nowPlayingMovies);
    const popularMovies=useSelector(store=>store.movies?.popularMovies);
    const topRatedMovies=useSelector(store=>store.movies?.topRatedMovies);

    if(!movies)return;

    return (
        <div className="bg-black">
            <div className="-mt-52 relative z-20">
             <MovieList title={"Now Playing"} movies={movies}/>
             <MovieList title={"Popular"} movies={popularMovies}/>
             <MovieList title={"Top Rated Movies"} movies={topRatedMovies}/>
            </div>
        </div>
    )
}

export default SecondaryContainer;