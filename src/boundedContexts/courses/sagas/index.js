import { all } from 'redux-saga/effects';

import coursesSaga from './coursesSaga';
import CourseDetailsSaga from './courseDetailsSaga';

export default function* coursesSagaCombined() {
    yield all([
        coursesSaga(),
        CourseDetailsSaga()
    ]);
}
