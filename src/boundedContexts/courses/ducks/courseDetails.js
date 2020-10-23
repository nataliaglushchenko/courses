// -----------------------------------------------------------------
// Constants
// -----------------------------------------------------------------

export const COURSE_DETAILS_FETCH_REQUESTED = 'COURSE_DETAILS_FETCH_REQUESTED';
export const COURSE_DETAILS_FETCH_STARTED = 'COURSE_DETAILS_FETCH_STARTED';
export const COURSE_DETAILS_FETCH_SUCCEEDED = 'COURSE_DETAILS_FETCH_SUCCEEDED';
export const COURSE_DETAILS_FETCH_FAILED = 'COURSE_DETAILS_FETCH_FAILED';

const initialState = {
    courseDetails: {},
    isCourseDetailsLoading: false,
    isCourseDetailsLoaded: false
};

// -----------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COURSE_DETAILS_FETCH_STARTED:
            return {
                ...state,
                isCourseDetailsLoaded: false,
                isCourseDetailsLoading: true
            };

        case COURSE_DETAILS_FETCH_SUCCEEDED:
            return {
                ...state,
                courseDetails: action.payload.courseDetails,
                isCourseDetailsLoaded: true,
                isCourseDetailsLoading: false
            };

        case COURSE_DETAILS_FETCH_FAILED:
            return {
                ...state,
                isCourseDetailsLoaded: false,
                isCourseDetailsLoading: false
            };

        default:
            return state;
    }
}

// -----------------------------------------------------------------
// Action Creators
// -----------------------------------------------------------------

export const courseDetailsFetchRequested = (course) => {
    return {
        type: COURSE_DETAILS_FETCH_REQUESTED,
        payload: { selectedCourse: course }
    };
};

export const courseDetailsFetchStarted = () => {
    return {
        type: COURSE_DETAILS_FETCH_STARTED
    };
};

export const courseDetailsFetchSucceeded = ({ courseDetails }) => {
    return {
        type: COURSE_DETAILS_FETCH_SUCCEEDED,
        payload: { courseDetails }
    };
};

export const courseDetailsFetchFailed = () => {
    return {
        type: COURSE_DETAILS_FETCH_FAILED
    };
};

// -----------------------------------------------------------------
// Selectors
// -----------------------------------------------------------------

const rootSelector = state => state.courses.courseDetails;

export const courseDetailsSelector = state => rootSelector(state).courseDetails;
export const isCourseDetailsLoadingSelector = state => rootSelector(state).isCourseDetailsLoading;
export const isCourseDetailsLoadedSelector = state => rootSelector(state).isCourseDetailsLoaded;