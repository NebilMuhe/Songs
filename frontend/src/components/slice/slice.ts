import { createSlice } from "@reduxjs/toolkit";

export interface SongItem {
    _id:string,
    title:string,
    artist:string,
    album:number,
    genre: string
}

export interface SongState{
    songs: SongItem[];
    isLoading: boolean;
    errors: string
}

// interface SongStateType{
//     song:SongState
// }

const initialState:SongState = {
    songs: [],
    isLoading: false,
    errors: ""
}

export const songSlice = createSlice({
    name:"songs",
    initialState:initialState,
    reducers:{
        getSongsRequest:(state)=>{
            state.isLoading = true
            state.errors = ""
        },
        getSongsSucess:(state,action)=>{
            state.songs = action.payload
            state.isLoading = false
            state.errors = ""
        },
        getSongsFailed:(state,action)=>{
            state.isLoading = false
            state.errors = action.payload
        },
        removeSongRequest:(state) =>{
            state.isLoading = true
            state.errors = ""
        },
        removeSongSucess:(state,action) =>{
            const songId = action.payload;
            const song = state.songs?.filter(song=>song._id!=songId)
            state.songs = song
            state.isLoading = true
            state.errors = ""
        },
        removeSongFailed:(state,action) =>{
            state.isLoading = true
            state.errors = action.payload
        }
    }
});

export const {getSongsRequest,getSongsSucess,getSongsFailed} = songSlice.actions
export default songSlice.reducer