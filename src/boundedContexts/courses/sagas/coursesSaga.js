import { takeLatest, put, putResolve, call, all} from 'redux-saga/effects';

import {
    coursesFetchFailed,
    coursesFetchStarted,
    coursesFetchSucceeded,
    COURSES_FETCH_REQUESTED
} from '../ducks/courses';

const fetchData = async () => {
    try {
        const response = fetch(`https://private-e05942-courses22.apiary-mock.com/courses`)
            .then(response => response.json())
        return response;
    } catch(e) {
        console.log(e);
    }
};

export function* coursesFetchRequestedHandler() {    
    try {
        yield putResolve(coursesFetchStarted());
        const response = yield call(fetchData);

        yield putResolve(coursesFetchSucceeded({
            courses: response
        }));
        
    } catch (error) {
        console.log('error happened', error);
        yield put(coursesFetchFailed({ error }));
    }
}

export default function* coursesSaga() {
    yield all([
        takeLatest(COURSES_FETCH_REQUESTED, coursesFetchRequestedHandler)
    ]);
}