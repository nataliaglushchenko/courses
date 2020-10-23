// -----------------------------------------------------------------
// Constants
// -----------------------------------------------------------------

export const COURSES_FETCH_REQUESTED = 'COURSES_FETCH_REQUESTED';
export const COURSES_FETCH_STARTED = 'COURSES_FETCH_STARTED';
export const COURSES_FETCH_SUCCEEDED = 'COURSES_FETCH_SUCCEEDED';
export const COURSES_FETCH_FAILED = 'COURSES_FETCH_FAILED';

const initialState = {
    courses: [],
    isCoursesLoading: false,
    isCoursesLoaded: false
};

// -----------------------------------------------------------------
// Reducer
// -----------------------------------------------------------------

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case COURSES_FETCH_STARTED:
            return {
                ...state,
                isCoursesLoaded: false,
                isCoursesLoading: true
            };

        case COURSES_FETCH_SUCCEEDED:
            return {
                ...state,
                courses: action.payload.courses,
                isCoursesLoaded: true,
                isCoursesLoading: false
            };

        case COURSES_FETCH_FAILED:
            return {
                ...state,
                isCoursesLoaded: false,
                isCoursesLoading: false
            };

        default:
            return state;
    }
}

// -----------------------------------------------------------------
// Action Creators
// -----------------------------------------------------------------


export const coursesFetchRequested = () => {
    return {
        type: COURSES_FETCH_REQUESTED
    };
};

export const coursesFetchStarted = () => {
    return {
        type: COURSES_FETCH_STARTED
    };
};

export const coursesFetchSucceeded = ({ courses }) => {
    return {
        type: COURSES_FETCH_SUCCEEDED,
        payload: { courses }
    };
};

export const coursesFetchFailed = () => {
    return {
        type: COURSES_FETCH_FAILED
    };
};

// -----------------------------------------------------------------
// Selectors
// -----------------------------------------------------------------

const rootSelector = state => state.courses.courses;

export const coursesSelector = state => rootSelector(state).courses;
export const isCoursesLoadingSelector = state => rootSelector(state).isCoursesLoading;
export const isCoursesLoadedSelector = state => rootSelector(state).isCoursesLoaded;
