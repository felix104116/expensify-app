import React from 'react';
import {connect} from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { startEditExpense, startRemoveExpense } from '../actions/expenses';

export class EditExpensePage extends React.Component {
    onSubmit = (expense) => {
        this.props.startEditExpense(this.props.expense.id,expense);
        this.props.history.push('/');
    };
    onRemove = () => {
        this.props.startRemoveExpense({id:this.props.expense.id});
        this.props.history.push('/');
    }
    render() {
        return (
            <div>
                <div className="content-container">
                    <div className="page-header">
                        <h1 className="page-header__title">Edit Page</h1>
                    </div>
                </div>
                <div className="content-container">
                <ExpenseForm 
                onSubmit={this.onSubmit}
                expense={this.props.expense}/>
                <div className="remove-container">
                    <button className="bigButton button--secondary" onClick={this.onRemove}>Remove Expense</button>
                </div>
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch,props) => ({
        startEditExpense: (id,expense) => dispatch(startEditExpense(id,expense)),
        startRemoveExpense: (id) => dispatch(startRemoveExpense(id))
});

const mapStateToProps = (state, props) => {
    return{
        expense: state.expenses.find((expense) => expense.id === props.match.params.id)
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(EditExpensePage);