import { combineReducers } from 'redux';

import courses from './courses';
import courseDetails from './courseDetails';

export default combineReducers({
    courses,
    courseDetails
});
