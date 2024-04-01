import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CREATE_SONG_REQUESTED, REMOVE_SONG_REQUESTED, SONG_FETCH_REQUESTED, UPDATE_SONG_REQUESTED } from '../actions/action'
import { fetchSong } from '../api/api'




function* fetchSongs():any {
    try {
        const user:any = yield call(fetchSong)
        yield put({ type: 'USER_FETCH_SUCCEEDED', user: user })
      } catch (e) {
        
      }
}

function* updateSong(){
    try {
        
    } catch (e) {
      
    }
}

function* addSong(){
    try {
        
    } catch (e) {
      
    }
}

function* removeSong(){
    try {
        
    } catch (e) {
      
    }
}

function* fetchSongData() {
    yield takeLatest(SONG_FETCH_REQUESTED,fetchSongs)
    yield takeLatest(UPDATE_SONG_REQUESTED,updateSong)
    yield takeLatest(CREATE_SONG_REQUESTED,addSong)
    yield takeLatest(REMOVE_SONG_REQUESTED,removeSong)
}


export default fetchSongData