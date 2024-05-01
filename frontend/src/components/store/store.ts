import { configureStore } from '@reduxjs/toolkit'
import createSagaMiddleware from 'redux-saga'

// import reducer from '../reducers/reducer'
import sagaSong from '../redux-saga/saga'
import slice from '../slice/slice'
import editSlice from "../slice/editSlice"
import modalSlice from "../slice/modalSlice"
import statsSlice from '../slice/statsSlice'


const sagaMiddleware = createSagaMiddleware()

const store = configureStore({
  reducer:{
    songs: slice,
    edit: editSlice,
    add: modalSlice,
    stats: statsSlice,
  }, 
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(sagaSong)


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export default store

