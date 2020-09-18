import {
	GET_REQUESTED_GENRE_DETAIL,
	GET_REQUESTED_GENRE_SUCCESS,
	RECEIVE_MUSIC_DATA_SUCCESS,
} from './constants'

let defaultState = {
	genres: [],
	selectedId: '',
	selectedGenre: {},
	isLoadingTasks: false,
}

export const genres = (state = defaultState, action) => {
	switch (action.type) {

		case RECEIVE_MUSIC_DATA_SUCCESS:
			return {
				...state,
				genres: action.payload
			}


		case GET_REQUESTED_GENRE_SUCCESS:
			return {
				...state,
				selectedGenre: action.payload
			}


		case GET_REQUESTED_GENRE_DETAIL:
			return {
				...state,
				selectedGenre: {}
			}

		default:
			return state;
	}
}

