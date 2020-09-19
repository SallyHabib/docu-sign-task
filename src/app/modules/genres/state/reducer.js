import {
	GET_REQUESTED_GENRE_DETAIL,
	GET_REQUESTED_GENRE_FAILED,
	GET_REQUESTED_GENRE_SUCCESS,
	RECEIVE_MUSIC_DATA_FAILED,
	RECEIVE_MUSIC_DATA_SUCCESS,
	REQUEST_MUSIC_DATA,
} from './constants'

let defaultState = {
	genres: [],
	selectedId: '',
	selectedGenreArtists: {},
	loading: false,
	loadingDetails: false
}

export const genres = (state = defaultState, action) => {
	switch (action.type) {

		case REQUEST_MUSIC_DATA:
			return {
				...state,
				loading: true
			}

		case RECEIVE_MUSIC_DATA_SUCCESS:
			return {
				...state,
				genres: action.payload,
				loading: false
			}

		case RECEIVE_MUSIC_DATA_FAILED:
			return {
				...state,
				loading: false

			}

		case GET_REQUESTED_GENRE_DETAIL:
			return {
				...state,
				selectedGenreArtists: {},
				loadingDetails: true
			}

		case GET_REQUESTED_GENRE_SUCCESS:
			return {
				...state,
				selectedGenreArtists: action.payload,
				loadingDetails: false
			}

		case GET_REQUESTED_GENRE_FAILED:
			return {
				...state,
				loadingDetails: false
			}

		default:
			return state;
	}
}

