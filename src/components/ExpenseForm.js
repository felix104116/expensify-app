import React from 'react';
import {connect} from 'react-redux';
import {addExpense} from '../actions/expenses';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

//const date = new Date();
const date = moment();

export default class ExpenseForm extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount/100).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calenderFocused:false,
            error: '',
        };
    }
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description}));
    };
    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note}));
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount}))
        }
    };
    onDateChange = (createdAt) => {
        if(createdAt){
            this.setState(() => ({createdAt}))
        }
    };
    onFocusChange = ({focused}) => {
        this.setState(() => ({calenderFocused:focused}))
    };
    handleAddExpense = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error:'Please provide a description and an amount.'}));
        }
        else{
            this.setState(() => ({error:''}));
            this.props.onSubmit({
                description: this.state.description,
                note: this.state.note,
                amount: parseFloat(this.state.amount,10)*100,
                createdAt: this.state.createdAt.valueOf(),
            });
        }
    }
    render(){
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddExpense}>
                    <input type="text" placeholder="Description" autoFocus="true" value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                    <textarea value={this.state.note} placeholder="Add a note for your expense (optional)" onChange={this.onNoteChange}/>
                    <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calenderFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths={1}
                        isOutsideRange={() => false}
                    />
                    <button>Add Expense</button>
                </form>
            </div>
        )
    }
}