import { poster_url } from "../utils/constants";

const MovieCard=({movie})=>{

    const {poster_path}=movie;
    if(!poster_path) return null;
    return(
         <div className="w-36 px-2 mx-2">
           <img 
           src={poster_url+poster_path}
           alt="Movie Card"/>
         </div>
    )
}

export default MovieCard;