import React from 'react';
import createHistory from 'history/createBrowserHistory';

//Components
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import ExpenseDashboardPage from '../components/Dashboard';
import LoginPage from '../components/LoginPage'
import PrivateRoute from './PrivateRoute';

//Router
import { Router, Route, Switch } from 'react-router-dom';

export const history = createHistory();

const AppRouter = () => (
    <Router history={history}>
        <div>
            <Switch>
                <Route path="/" component={LoginPage} exact={true}/>
                <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} exact={true}/>
                <PrivateRoute path="/create" component={AddExpensePage} exact={true}/>
                <PrivateRoute path="/edit/:id" component={EditExpensePage} exact={true}/>
                <Route path="/help" component={HelpPage} exact={true}/>
                <Route path="*" component={ErrorPage}/>
            </Switch>
        </div>
    </Router>
);

export default AppRouter;