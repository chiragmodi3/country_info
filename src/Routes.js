import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import PostDetails from './PostDetails';

const Routes = () => {
    return (
        <Router>
            <Switch>
                <Route exact path="/" component={App} />
                <Route path="/post/:postId" component={PostDetails} />
            </Switch>
        </Router>
    );
};

export default Routes;
