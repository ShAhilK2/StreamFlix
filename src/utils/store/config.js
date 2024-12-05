import { createSlice } from "@reduxjs/toolkit";
import { lang } from "../constants";

const config = createSlice({
    name:"config",
    initialState:{
        lang:"en"
    },reducers:{
        changeLanguage:(state,action)=>{
            state.lang = action.payload
        }
    }
})



export const {changeLanguage} = config.actions;


export default config.reducer;