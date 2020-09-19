
import {
  GET_REQUESTED_GENRE_DETAIL,
  REQUEST_MUSIC_DATA
} from "./constants";

export const requestMusicGenres = () => {
  return {
    type: REQUEST_MUSIC_DATA,
  };
}

export const getMusicGenreDetail = (id) => {
  return {
    type: GET_REQUESTED_GENRE_DETAIL,
    payload: id
  };
}

