import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CREATE_SONG_REQUESTED, REMOVE_SONG_REQUESTED, SONG_FETCH_FAILED, SONG_FETCH_REQUESTED, SONG_FETCH_SUCCESS, UPDATE_SONG_REQUESTED } from '../actions/action'
import { fetchSong } from '../api/api'
import { getSongsFailed, getSongsSucess, SongItem, SongState } from '../slice/slice'
import axios from 'axios'




function* fetchSongs() {
    try {
        const song:SongItem = yield call(axios.get,"http://localhost:4000/api/songs")
        yield put(getSongsSucess(song))
      } catch (e) {
        console.log(e)
        yield put(getSongsFailed)
      }
}

function* updateSong(){
    try {
        const song:SongItem = yield call(axios.put,"http://localhost:4000/api/songs")
    } catch (e) {
      
    }
}

function* addSong(){
    try {
        const song:SongItem = yield call(axios.post,"http://localhost:4000/api/songs")
    } catch (e) {
      
    }
}

function* removeSong(){
    try {
        const song:SongItem = yield call(axios.delete,"http://localhost:4000/api/songs")
    } catch (e) {
      
    }
}

function* fetchSongData() {
    // yield takeLatest(SONG_FETCH_REQUESTED,fetchSongs)
    yield takeLatest("songs/getSongsRequest",fetchSongs)
    yield takeLatest("songs/updateSongsRequst",updateSong)
    yield takeLatest("songs/addSongsRequst",addSong)
    yield takeLatest("songs/removeSongsRequst",removeSong)
}


export default fetchSongData