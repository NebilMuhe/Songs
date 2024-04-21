import { createSlice } from "@reduxjs/toolkit";

export interface SongItem {
    _id:string,
    title:string,
    artist:string,
    album:number,
    genre: string
}

export interface SongState{
    songItems: SongItem[];
    isLoading: boolean;
    errors: string
}


const initialState:SongState = {
    songItems: [],
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
            state.songItems = action.payload
            state.isLoading = false
            state.errors = ""
        },
        getSongsFailed:(state,action)=>{
            state.isLoading = false
            state.errors = action.payload.message
        },
        removeSongRequest:(state) =>{
            state.isLoading = true
            state.errors = ""
        },
        removeSongSucess:(state,action) =>{
            const songId = action.payload._id;
            const song = state.songItems?.filter(song=>song._id!=songId)
            state.songItems = song
            state.isLoading =  false
            state.errors = ""
        },
        removeSongFailed:(state,action) =>{
            state.isLoading = true
            state.errors = action.payload.message
        },
        updateSongRequest:(state,action) =>{
            state.isLoading = true
            state.errors = ""
        },
        updateSongSucess:(state,action) =>{
            const songId = action.payload._id
            const updatedSong =  state.songItems.map((song)=> song._id === songId ? action.payload:song)
            state.songItems = updatedSong
            state.isLoading =  false
            state.errors = ""
        },
        updateSongFailed:(state,action) =>{
            state.isLoading = true
            state.errors = action.payload.message
        },
        
    }
});

export const {getSongsRequest,getSongsSucess,getSongsFailed,removeSongRequest,removeSongSucess, removeSongFailed,
    updateSongRequest,updateSongSucess,updateSongFailed} = songSlice.actions
export default songSlice.reducer