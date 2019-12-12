import React from 'react';

//Components
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import HelpPage from '../components/HelpPage';
import ErrorPage from '../components/ErrorPage';
import ExpenseDashboardPage from '../components/Dashboard';
import Header from '../components/Header';

//Router
import { BrowserRouter, Route, Switch } from 'react-router-dom';


const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>
        <Switch>
            <Route path="/" component={ExpenseDashboardPage} exact={true}/>
            <Route path="/create" component={AddExpensePage} exact={true}/>
            <Route path="/edit/:id" component={EditExpensePage} exact={true}/>
            <Route path="/help" component={HelpPage} exact={true}/>
            <Route path="*" component={ErrorPage}/>
        </Switch>
    </div>
</BrowserRouter>
);

export default AppRouter;