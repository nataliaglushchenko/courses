import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import cn from 'classnames';

import Layout from './hoc/layout';
import Courses from './pages/courses';
import CourseDetails from './pages/courseDetails';

import './app.scss';

class App extends Component {
    render() {
        return (
            <div className={cn('app')}>
                <Layout>
                    <Switch>
                        <Route path="/courses" component={Courses} />
                        <Route path="/:course" component={CourseDetails} />
                        <Redirect from='/' exact to="/courses" /> 
                    </Switch>
                </Layout>
            </div>
        );
    }
}

export default App;