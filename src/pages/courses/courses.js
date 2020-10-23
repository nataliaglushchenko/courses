import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Spinner } from 'reactstrap';

import Card from '../../components/card';
import CourseDetails from '../../components/courseDetails';

import './courses.scss';

const propTypes = {
    onFetchCourses: PropTypes.func.isRequired,
    courses: PropTypes.arrayOf(PropTypes.object),
    isCoursesLoading: PropTypes.bool.isRequired,
    isCoursesLoaded: PropTypes.bool.isRequired,
    onFetchCourseDetails: PropTypes.func.isRequired,
    courseDetails: PropTypes.shape({
        description: PropTypes.string,
        startDates: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.shape({
            amount: PropTypes.number.isRequired,
            currency: PropTypes.string.isRequired
        })
    }),
    isCourseDetailsLoading: PropTypes.bool.isRequired,
    isCourseDetailsLoaded: PropTypes.bool.isRequired,
};

const defaultProps = {
    courses: [],
    courseDetails: {}
};

function Courses(props) {
    const {
        onFetchCourses,
        courses: fetchedCourses,
        isCoursesLoading,
        isCoursesLoaded,
        onFetchCourseDetails,
        courseDetails,
        isCourseDetailsLoaded,
        isCourseDetailsLoading
    } = props;

    const [selectedCourseSlug, setSelectedCourseSlug] = useState('');

    useEffect(() => {
        if(!isCoursesLoaded) onFetchCourses();
    }, []);

    const handleSelectCourse = (course) => {
        setSelectedCourseSlug(course.slug);
        onFetchCourseDetails(course);
    };

    const courses = isCoursesLoading ? <Spinner /> : isCoursesLoaded && fetchedCourses.map(course => {
        return (
            <Card
                className={cn(
                    'm-2'
                )}
                key={course.slug}
                title={course.title}
                author={course.author}
                startDate={course.next_start_formatted}
                buttonTxt="Details"
                onClick={() => handleSelectCourse(course)}
                isSelected={course.slug === selectedCourseSlug}
            />
        );
    });

    return (
        <div>
            <div
                className={cn(
                    'd-flex',
                    'flex-row',
                    'flex-wrap',
                    'my-4'
                )}
            >
                {courses}
            </div>
            { 
                isCourseDetailsLoading ? <Spinner /> :
                isCourseDetailsLoaded && 
                <CourseDetails 
                    description={courseDetails.description}
                    startDates={courseDetails.start_dates}
                    price={courseDetails.prices[0]}
                />
            }
        </div>
    );
}

Courses.propTypes = propTypes;
Courses.defaultProps = defaultProps;

export default Courses;