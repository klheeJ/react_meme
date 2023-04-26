import { createSlice } from "@reduxjs/toolkit"

const rootSlice = createSlice ({
    name: "root",
    initialState: {
        meme_ID: "Meme ID",
        desc: "Description",
        year: "Year",
    },
    reducers: {
        chooseMeme_ID: (state,action) => { state.meme_ID = action.payload },
        chooseDesc: (state, action) => { state.desc = action.payload },
        chooseYear: (state, action) => { state.year = action.payload },
    }
})

export const reducer = rootSlice.reducer;
export const { chooseMeme_ID, chooseDesc, chooseYear } = rootSlice.actions