import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { fork, all } from 'redux-saga/effects';

import { genres } from './genres/ui/reducers';
import * as uiSagas from './genres/ui/sagas';


export const rootReducer = combineReducers({
    genres,
    router: routerReducer
})

export function* rootSaga() {
    yield all([
        ...Object.values(uiSagas),
    ].map(fork))
}

