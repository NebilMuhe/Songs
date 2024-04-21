import { createSlice } from "@reduxjs/toolkit";


export interface ModalItem {
    isOpen:boolean
}


const initialState:ModalItem = {
    isOpen: false  
}

const modalSlice = createSlice({
    name:'add',
    initialState,
    reducers:{
        openAddModal:(state)=>{
            state.isOpen = true
        },  
        closeAddModal:(state)=>{
            state.isOpen = false
        }
    }

})

// console.log(songSlice)
export const {openAddModal,closeAddModal} = modalSlice.actions;
export default modalSlice.reducer