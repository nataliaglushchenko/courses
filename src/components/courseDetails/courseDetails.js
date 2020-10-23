import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Badge } from 'reactstrap';

import './courseDetails.scss';

const propTypes = {
    description: PropTypes.string.isRequired,
    startDates: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.shape({
        amount: PropTypes.number.isRequired,
        currency: PropTypes.string.isRequired
    }).isRequired
};

const defaultProps = {

};

function CourseDetails(props) {
    const {
        description,
        startDates,
        price
    } = props;

    const dates = startDates.map(date => <Badge key={date} className={cn('mx-2')}>{date}</Badge>);

    return (
        <div
            className={cn(
                'courseDetails',
                'd-flex',
                'flex-column',
                'w-100',
                'bg-light',
                'border-secondary',
                'd-flex',
                'justify-content-between',
                'p-5',
            )}
        >
            <div>{description}</div>
            <div>Next available starting dates {dates}</div>
            <h5>Total price {`${price.amount} ${price.currency.toUpperCase()}`}</h5>
        </div>
    );
}

CourseDetails.propTypes = propTypes;
CourseDetails.defaultProps = defaultProps;

export default CourseDetails;