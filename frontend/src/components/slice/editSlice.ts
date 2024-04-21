import { createSlice } from "@reduxjs/toolkit";
import { SongItem } from "./slice";

export interface EditItem {
    songItems:SongItem[]
    isEditOpen:boolean,
    id:string
}


const initialState:EditItem = {
    songItems:[],
    isEditOpen: false,
    id:""  
}




const editSlice = createSlice({
    name:'edit',
    initialState,
    reducers:{
        openEditModal:(state,action)=>{
            const itemId = action.payload;
            state.isEditOpen = true;
            state.id = itemId;
        },  
        closeEditModal:(state)=>{
            state.isEditOpen = false
        },
        dataEditModal:(state,payload)=>{
            state.isEditOpen = false
        }
    }

})

// console.log(songSlice)
export const {openEditModal,closeEditModal,dataEditModal} = editSlice.actions;
export default editSlice.reducer