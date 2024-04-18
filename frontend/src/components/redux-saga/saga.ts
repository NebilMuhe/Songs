import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import { CREATE_SONG_REQUESTED, REMOVE_SONG_REQUESTED, SONG_FETCH_FAILED, SONG_FETCH_REQUESTED, SONG_FETCH_SUCCESS, UPDATE_SONG_REQUESTED } from '../actions/action'
import { fetchSong } from '../api/api'
import { getSongsFailed, getSongsSucess, removeSongFailed, removeSongSucess, SongItem, SongState } from '../slice/slice'
import axios, { AxiosResponse } from 'axios'




function* fetchSongs() {
    try {
        const response:AxiosResponse = yield call(axios.get,"http://localhost:4000/api/songs")
        const song:SongItem = yield response.data
        yield put(getSongsSucess(song))
      } catch (e) {
        yield put(getSongsFailed(e))
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

function* removeSong(id: any):any{
    try {
        const response:AxiosResponse = yield call(axios.delete,`http://localhost:4000/api/songs/${id.payload}`)
        const song:SongItem = yield response.data
        yield put(removeSongSucess(song))
    console.log("Deleted data",song)
    } catch (e) {
       yield put(removeSongFailed(e))
    }
}

function* fetchSongData() {
    // yield takeLatest(SONG_FETCH_REQUESTED,fetchSongs)
    yield takeLatest("songs/getSongsRequest",fetchSongs)
    yield takeLatest("songs/updateSongsRequst",updateSong)
    yield takeLatest("songs/addSongsRequst",addSong)
    yield takeLatest("songs/removeSongRequest",removeSong)
}


export default fetchSongData