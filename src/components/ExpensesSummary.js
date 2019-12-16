import React from 'react';
import { connect } from 'react-redux';
import numeral from 'numeral';
import getExpenses from '../selectors/expenses';
import getExpensesTotal from '../selectors/expenses-total';

//Expense count n'est pas mis à jour
export const ExpensesSummary = ({expenseCount,expenseTotal}) => {
    const expenseWord = expenseCount > 1 ? 'expenses' : 'expense';
    const formatedExpenseTotal = numeral(expenseTotal/100).format('$0,0.00');
    console.log(expenseTotal);

    return(
        <div>
            <h2>Viewing {expenseCount} {expenseWord} totaling {formatedExpenseTotal}</h2>
        
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