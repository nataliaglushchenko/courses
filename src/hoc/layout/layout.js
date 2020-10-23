import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { Navbar } from 'reactstrap';

import './layout.scss';

const propTypes = {
};

const defaultProps = {

};

function Layout(props) {
    return (
        <>
            <header 
                className={cn(
                    'toolbar',
                )}
            >
                <Navbar 
                    color="light"
                    expand="md"
                    className={cn(
                        'd-flex'
                    )} 
                >
                    <Link
                        className={cn(
                            'p-1',
                        )}
                        to={{
                            pathname: '/courses'
                        }}
                    >
                        CareerFoudry courses
                    </Link>
                </Navbar>
            </header>
            <main className={cn('content')}>
                {props.children}
            </main>
        </>
    );
}

Layout.propTypes = propTypes;
Layout.defaultProps = defaultProps;

export default Layout;