import MovieList from "./MovieList";

const GptMovieSuggestions=({movies,movieslist})=>{

    if(!movies) return null;

    return (
        <div className="p-4 m-4 bg-black text-white bg-opacity-90">
           {movies.map((movie,index)=><MovieList key={movie} title={movie} movies={movieslist[index]}/>)}
        </div>
    )

}

export default GptMovieSuggestions;