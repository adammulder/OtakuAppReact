import { createSlice } from '@reduxjs/toolkit';

const rootSlice = createSlice({
    name: "root",
    initialState: {
        anime: "Anime",
        fav_char: 'Fav_char',
        ep_watched: "Ep_watched",
        rating: "Rating",
    },
    reducers:{
        //action is submitted elsewhere -written to state.name
        chooseAnime: (state, action) => {state.anime = action.payload},
        chooseFav_char: (state, action) => {state.fav_char = action.payload},
        chooseEp_watched: (state, action) => {state.ep_watched = action.payload},
        chooseRating: (state, action) => {state.rating = action.payload},
    }
})

export const reducer = rootSlice.reducer;
export const { chooseAnime, chooseFav_char, chooseEp_watched, chooseRating } = rootSlice.actions