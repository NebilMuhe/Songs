import { createSlice } from "@reduxjs/toolkit";


export interface ModalItem {
    id: number,
    isOpen:boolean
}


const initialState:ModalItem = {
    id:0,
    isOpen: false  
}

const modalSlice = createSlice({
    name:'add',
    initialState,
    reducers:{
        openModal:(state,action)=>{
            state.id = action.payload
            state.isOpen = true
        },  
        closeModal:(state)=>{
            state.isOpen = false
        }
    }

})

// console.log(songSlice)
export const {openModal,closeModal} = modalSlice.actions;
export default modalSlice.reducer