import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  stats: null,
  isLoading: false,
  errors: null,
};

const statsSlice = createSlice({
    name:"stats",
    initialState: initialState,
    reducers:{
        getStatsRequest:(state) =>{
            state.isLoading =true
            state.errors = null
        },
        getStatsSucess:(state,action)=>{
            state.stats = action.payload
            state.isLoading = false
            state.errors = null
        },
        getStatsFailed:(state,action) =>{
            state.isLoading = false
            state.errors = action.payload
        }
    }
})

export const {getStatsRequest,getStatsSucess,getStatsFailed} = statsSlice.actions
export default statsSlice.reducer