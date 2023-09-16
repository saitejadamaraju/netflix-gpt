import { useEffect } from "react";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideos } from "../utils/moviesSlice";

const useMovieTrailer=(movieId)=>{

    const dispatch=useDispatch();

    const trailerVideo=useSelector(store=>store.movies?.trailerVideo);

    const getTrailerVideo= async ()=>
    {
        const data= await fetch('https://api.themoviedb.org/3/movie/'+movieId+'/videos?language=en-US', API_OPTIONS);
        
        const videos= await data.json();

        //console.log(videos?.results);
        
        const filterVideos=videos?.results.filter((video)=> video?.type==='Trailer');
        const trailer= filterVideos.length?filterVideos[0]:videos?.results[0];

        dispatch(addTrailerVideos(trailer));
    }

    useEffect(()=>{
       !trailerVideo && getTrailerVideo();
    },[])
   
}

export default useMovieTrailer;