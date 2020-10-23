import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';

const propTypes = {
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    startDate: PropTypes.string.isRequired,
    buttonTxt: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    isSelected: PropTypes.bool,
};

const defaultProps = {
    isSelected: false
};

function CourseCard(props) {
    const {
        title,
        author,
        startDate,
        buttonTxt,
        onClick,
        className,
        isSelected
    } = props;

    return (
        <Card
            className={className}
            outline
            color={isSelected ? "danger" : "gray"}
        >
            <CardBody>
                <CardTitle>{title}</CardTitle>
                <CardSubtitle>Author: {author}</CardSubtitle>
                <CardSubtitle>Start date: {startDate}</CardSubtitle>
                <Button onClick={onClick}>{buttonTxt}</Button>
            </CardBody>
        </Card>
    );
}

CourseCard.propTypes = propTypes;
CourseCard.defaultProps = defaultProps;

export default CourseCard;