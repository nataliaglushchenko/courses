import { connect } from 'react-redux';

import Courses from './courses';

import { 
    coursesFetchRequested, 
    coursesSelector, 
    isCoursesLoadedSelector, 
    isCoursesLoadingSelector 
} from '../../boundedContexts/courses/ducks/courses';

import { 
    courseDetailsFetchRequested, 
    courseDetailsSelector, 
    isCourseDetailsLoadedSelector, 
    isCourseDetailsLoadingSelector 
} from '../../boundedContexts/courses/ducks/courseDetails';

const mapStateToProps = state => {
    return {
        courses: coursesSelector(state),
        isCoursesLoading: isCoursesLoadingSelector(state),
        isCoursesLoaded: isCoursesLoadedSelector(state),
        courseDetails: courseDetailsSelector(state),
        isCourseDetailsLoaded: isCourseDetailsLoadedSelector(state),
        isCourseDetailsLoading: isCourseDetailsLoadingSelector(state)
    };
};

const mapDispatchToProps = {
    onFetchCourses: coursesFetchRequested,
    onFetchCourseDetails: courseDetailsFetchRequested
};

export default connect(mapStateToProps, mapDispatchToProps)(Courses);
