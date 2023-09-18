import { useSelector } from "react-redux";
import { BG_URL } from "../utils/constants";
import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage=()=>{

    const {gptMoviesNames,gptMovies}=useSelector(store=>store.gpt);

    return(

        <div>
            <div className="fixed -z-10">
                <img className="h-screen w-screen object-cover"
                     src={BG_URL}
                     alt="logo"/>
            </div>
            <div>
                <GptSearchBar/>
                <GptMovieSuggestions movies={gptMoviesNames} movieslist={gptMovies}/>
            </div>
            
        </div>
    )

}

export default GptSearchPage;