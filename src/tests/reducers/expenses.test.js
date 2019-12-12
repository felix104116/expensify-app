import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses'
import moment from 'moment';

test('should setup expense reducer', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([])
})

test('should remove an expense to reducer', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:expenses[0].id
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        expenses[1],expenses[2]
    ])
})
test('should not remove an expense if id not found', () => {
    const action = {
        type:'REMOVE_EXPENSE',
        id:'-1'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})


test('should add an expense to reducer', () => {
    const expense = {
        description: 'McDonalds',
        amount:10000,
        note:'',
        createdAt:moment().startOf('month')
    }
    const action = {
        type:'ADD_EXPENSE',
        expense
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([
        ...expenses,
        expense
    ])
})

test('should edit and expense from reducer', () => {
    const amount = 9000;
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[0].id,
        updates:{
            amount
        }
    }
    const state = expensesReducer(expenses,action);
    expect(state[0].amount).toEqual(amount)
})

test('should edit and expense from reducer', () => {
    const amount = 9000;
    const action = {
        type:'EDIT_EXPENSE',
        updates:{amount},
        id:'10'
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual(expenses)
})


