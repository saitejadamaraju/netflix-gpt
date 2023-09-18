import { createSlice } from "@reduxjs/toolkit";

const gptSlice=createSlice({
    name:'gpt',
    initialState:{
        showGptSearch:false,
        gptMoviesNames:null,
        gptMovies:null,
    },
    reducers:{

        toggleGptSearchView:(state)=>{
           state.showGptSearch=!state.showGptSearch;
        },

        addGptMovies:(state,action)=>{
             const {movieNames,movieDetails}=action.payload;
             state.gptMoviesNames=movieNames;
             state.gptMovies=movieDetails;
        }
    }
})

export const {toggleGptSearchView,addGptMovies}=gptSlice.actions;

export default gptSlice.reducer;