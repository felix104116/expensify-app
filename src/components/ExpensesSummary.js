import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';
import {history} from '../routers/AppRouter';

//Expense count n'est pas mis à jour
export const ExpensesSummary = ({expenseCount,expenseTotal}) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    const formatedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00');
    return(
        <div className="page-header">
            <div className="content-container">
                <h1 className="page-header__title">Viewing <span>{expenseCount}</span> {expenseWord} totaling <span>{formatedExpenseTotal}</span></h1>
                <button className="bigButton" onClick={() => history.push('/create')}>Add Expense</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    const expenses = getExpenses(state.expenses,state.filters);
    return {
        expenseCount:expenses.length,
        expenseTotal: getExpensesTotal(expenses)
    }
}

export default connect(mapStateToProps)(ExpensesSummary);