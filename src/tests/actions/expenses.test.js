import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,startRemoveExpense,removeExpense,editExpense, setExpenses, startSetExpenses } from '../../actions/expenses';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach(() => {
    const expensesData = {};
    expenses.forEach(({id,description,note,amount,createdAt}) => {
        expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
});

test('Should remove an expense', () => {
    const result = removeExpense({id:'123abc'});
    expect(result).toMatchObject({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
});

test('Should edit an expense', () => {
    const result = editExpense('123abc',{note:'New note'});
    expect(result).toEqual({
        type: 'EDIT_EXPENSE',
        id:'123abc',
        updates: {
            note:'New note'
        }
    })
})

test('Should add an expense', () => {
    const result = addExpense(expenses[0]);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: expenses[0]
    });
});

test('should add expense to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: 'Mouse',
        amount: 9000,
        note:'This one is better',
        createdAt: 1000
    };
    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((res) => {
            expect(res.val()).toEqual(expenseData);
            done();
    })
});

test('should add expense with defaults to database and store', (done) => {
    const store = createMockStore({});
    const expenseData = {
        description: '',
        note: '',
        amount: 0,
        createdAt: 0
    };
    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id:expect.any(String),
                ...expenseData
            }
        });

        return database.ref(`expenses/${actions[0].expense.id}`).once('value');
        })
        .then((res) => {
            expect(res.val()).toEqual(expenseData);
            done();
    })
});

test('should setup set expense action with data', () => {
    const action = setExpenses(expenses);
    expect(action).toEqual({
        type:'SET_EXPENSES',
        expenses
    });
});

test('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[0]]
    }
    const state = expensesReducer(expenses,action);
    expect(state).toEqual([expenses[0]]);
})

test('should fetch expenses from database', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses())
    .then((res) => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type:'SET_EXPENSES',
            expenses
        })
        done();
    })
})

  
test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });