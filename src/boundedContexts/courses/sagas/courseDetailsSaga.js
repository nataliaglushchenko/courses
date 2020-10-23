import { takeLatest, put, putResolve, call, all} from 'redux-saga/effects';

import {
    courseDetailsFetchFailed,
    courseDetailsFetchStarted,
    courseDetailsFetchSucceeded,
    COURSE_DETAILS_FETCH_REQUESTED
} from '../ducks/courseDetails';

const fetchData = async (slug) => {
    try {
        const response = fetch(`https://private-e05942-courses22.apiary-mock.com/courses/${slug}`)
        .then(res => res.json())
                
        return response;
    } catch(e) {
        console.log(e);
    }
};

export function* courseDetailsFetchRequestedHandler(action) {
    const { slug: selectedCourseSlug } = action.payload.selectedCourse;

    try {
        yield putResolve(courseDetailsFetchStarted());
        const response = yield call(fetchData, selectedCourseSlug);

        yield putResolve(courseDetailsFetchSucceeded({
            courseDetails: response
        }));
        
    } catch (error) {
        console.log('error happened', error);
        yield put(courseDetailsFetchFailed({ error }));
    }
}

export default function* courseDetailsSaga() {
    yield all([
        takeLatest(COURSE_DETAILS_FETCH_REQUESTED, courseDetailsFetchRequestedHandler)
    ]);
}