import React from 'react';
import createHistory from 'history/createBrowserHistory';

//Components
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import ErrorPage from '../components/ErrorPage';
import ExpenseDashboardPage from '../components/Dashboard';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute.js';

//Router
import { Router, Route, Switch } from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <PublicRoute path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} exact={true}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;