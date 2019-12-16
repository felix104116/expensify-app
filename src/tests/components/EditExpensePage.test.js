import {EditExpensePage} from '../../components/EditExpensePage';
import React from 'react';
import {shallow} from 'enzyme';
import expenses from '../fixtures/expenses';

let editExpense, startRemoveExpense, history, wrapper;


beforeAll(() => {
    editExpense = jest.fn();
    startRemoveExpense = jest.fn();
    history = {
        push: jest.fn()
    };
    wrapper = shallow(
        <EditExpensePage 
        editExpense={editExpense} 
        startRemoveExpense={startRemoveExpense} 
        history={history} 
        expense={expenses[0]}
        />
        );
})

test('should render EditExpensePage',() => expect(wrapper).toMatchSnapshot());

test('should remove a component', () => {
    wrapper.find('button').simulate('click');
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(startRemoveExpense).toHaveBeenLastCalledWith({id:expenses[0].id});
})

test('should handle edit expense', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0]);
    expect(history.push).toHaveBeenLastCalledWith('/');
    expect(editExpense).toHaveBeenCalledWith(expenses[0].id,expenses[0]);
})