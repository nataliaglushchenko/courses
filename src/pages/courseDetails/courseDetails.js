import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import './courseDetails.scss';

const propTypes = {

};

const defaultProps = {

};

function CourseDetails() {
    return (
        <div
            className={cn(
                'courseDetails',
                'd-flex',
                'justify-content-between'
            )}
        >
            course details page
        </div>
    );
}

CourseDetails.propTypes = propTypes;
CourseDetails.defaultProps = defaultProps;

export default CourseDetails;