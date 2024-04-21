import { createSlice } from "@reduxjs/toolkit";


export interface ModalItem {
    isOpen:boolean
}


const initialState:ModalItem = {
    isOpen: false  
}

const modalSlice = createSlice({
    name:'modal',
    initialState,
    reducers:{
        openModal:(state)=>{
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