import MovieCard from "./MovieCard";

const MovieList=({title,movies})=>{

   return (
      <div >
        <h1 className="text-xl font-semibold  p-2 m-2 text-white">{title}</h1>
        <div className="flex overflow-x-scroll hide-scroll-bar">
            <div className="flex">
                {movies && movies.map((movie)=><MovieCard key={movie?.id} movie={movie}/>)}
            </div>
        </div>
      </div>
   );

}

export default MovieList;