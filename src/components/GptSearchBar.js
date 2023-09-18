import { useRef } from "react";
import { openai } from "../utils/openai";
import { API_OPTIONS } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addGptMovies } from "../utils/gptSlice";

const GptSearchBar=()=>{

    const dispatch=useDispatch();

    const searchText=useRef(null);

    const searchMovieDetailsFromTMDB = async (movie)=>{

         const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS);

         const json= await data.json();

         return json?.results;
    }

    const getGptResults = async () =>{ 

        //console.log(searchText.current.value);
        // Make an API call to GPT API and get Movie Results

        const gptQuery =
          "Act as a Movie Recommendation system and suggest some movies for the query : " +
         searchText.current.value +
         ". only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mil Gaya";

        const gptResults = await openai.chat.completions.create({
         messages: [{ role: "user", content: gptQuery }],
         model: "gpt-3.5-turbo",
        });

        if (!gptResults.choices) {
         // TODO: Write Error Handling
         }

       //console.log(gptResults.choices?.[0]?.message?.content);

       const gptMovies=gptResults.choices?.[0]?.message?.content.split(",");

       const tmdbPromiseArray=gptMovies.map((movie)=>searchMovieDetailsFromTMDB(movie));

       const tmdbMovies=await Promise.all(tmdbPromiseArray);

       //console.log(tmdbMovies);

       dispatch(addGptMovies({movieNames:gptMovies,movieDetails:tmdbMovies}));

    }


    return(

        <div className="pt-[40%] md:pt-[10%] flex justify-center">
            <form className="w-full md:w-3/4 bg-black grid grid-cols-12 " onSubmit={(e)=>e.preventDefault()}>
            
                <input 
                ref={searchText}
                className="p-2 md:p-4 m-4 col-span-9 "
                type="text" 
                placeholder="What would you like to watch today?"/>


                <button 
                
                className="font-semibold px-2 md:px-4 py-2 m-4 bg-red-700 rounded-lg cursor-pointer col-span-3"
                onClick={getGptResults}
                >Search</button>
            

            </form>
        </div>
    )

}

export default GptSearchBar;