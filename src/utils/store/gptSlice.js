import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name:"gpt",
    initialState:{
        showGpt:false,
        gptMoviesResults :null,
        gptMoviesNames :null
    },
    reducers:{
        toggleShowGpt:(state,action) =>{
            state.showGpt = !state.showGpt;

        },
        addGptMovies :(state,action)=>{
            const {gptMoviesNames,gptMoviesResults} = action.payload;
            state.gptMoviesNames = gptMoviesNames;
            state.gptMoviesResults = gptMoviesResults
        }

    }
})




export const {toggleShowGpt,addGptMovies} = gptSlice.actions;

export default gptSlice.reducer;