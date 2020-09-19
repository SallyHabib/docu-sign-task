import { takeEvery, all, put } from 'redux-saga/effects'
import axios from 'axios'
import {
	RECEIVE_MUSIC_DATA_SUCCESS,
	REQUEST_MUSIC_DATA,
	GET_REQUESTED_GENRE_DETAIL,
	GET_REQUESTED_GENRE_SUCCESS
} from './constants'

const baseUrl = 'https://api.deezer.com/genre'
const proxyurl = "https://cors-anywhere.herokuapp.com/";

export function* getMusicGenres(action) {
	let genres = []
	yield axios.get(`${proxyurl}${baseUrl}`).then(function (response) {

		genres = response.data.data
	}
	).catch(function (error) {
		return error
	});
	yield put({
		type: RECEIVE_MUSIC_DATA_SUCCESS,
		payload: genres
	})
}

export function* getMusicGenreDetail(action) {
	let genreDetail = []
	yield axios.get(`${proxyurl}${baseUrl}/${action.payload}/artists`).then(function (response) {
		genreDetail = response.data.data
	}
	).catch(function (error) {
		return error
	});
	yield put({
		type: GET_REQUESTED_GENRE_SUCCESS,
		payload: genreDetail
	})
}


export default function* rootSaga() {
	yield all([
		takeEvery(REQUEST_MUSIC_DATA, getMusicGenres),
		takeEvery(GET_REQUESTED_GENRE_DETAIL, getMusicGenreDetail),

	]);
}
