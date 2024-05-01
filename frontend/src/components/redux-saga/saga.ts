import { call, put, takeLatest } from 'redux-saga/effects'
import { addSongsFailed, addSongsSucess,
     getSongsFailed, getSongsSucess, removeSongFailed, removeSongSucess, SongItem, updateSongFailed, updateSongSucess } from '../slice/slice'
import axios, { AxiosResponse } from 'axios'
import { getStatsFailed, getStatsSucess } from '../slice/statsSlice'

function* fetchSongs() {
    try {
        const response:AxiosResponse = yield call(axios.get,"http://localhost:4000/api/songs")
        const song:SongItem = yield response.data
        yield put(getSongsSucess(song))
      } catch (e) {
        yield put(getSongsFailed(e))
      }
}


function* updateSong({payload}:any):any{
    try {
        const id = payload.id
        const response:AxiosResponse = yield call(axios.put,`http://localhost:4000/api/songs/${id}`,payload)
        const song:SongItem = yield response.data
        yield put(updateSongSucess(song))
    } catch (e) {
        yield put(updateSongFailed(e))
    }
}

function* addSong({payload}:any):any{
    try {
        const response:AxiosResponse = yield call(axios.post,"http://localhost:4000/api/songs",payload)
        const song:SongItem = yield response.data
        yield put(addSongsSucess(song))
    } catch (e) {
       yield put(addSongsFailed(e))
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

function* getStats(){
    try {
        const response:AxiosResponse = yield call(axios.get,`http://localhost:4000/api/songs/v1/stats/`)
        const song:SongItem = yield response.data
        yield put(getStatsSucess(song))
    console.log("Deleted data",song)
    } catch (e) {
       yield put(getStatsFailed(e))
    }
}

function* fetchSongData() {
    yield takeLatest("songs/getSongsRequest",fetchSongs)
    yield takeLatest("songs/updateSongRequest",updateSong)
    yield takeLatest("songs/addSongsRequest",addSong)
    yield takeLatest("songs/removeSongRequest",removeSong)
    yield takeLatest("stats/getStatsRequest",getStats)
}


export default fetchSongData