import { all } from 'redux-saga/effects';

import coursesSaga from './courses/sagas';

export default function* rootSaga() {
    yield all([
        coursesSaga()
    ]);
}
