import { combineReducers } from 'redux';

import courses from './courses/ducks';

const rootReducer = combineReducers({
    courses
});

export default rootReducer;
