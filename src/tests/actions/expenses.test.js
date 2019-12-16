import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk'
import {startAddExpense,addExpense,removeExpense,editExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

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


// test('Should add an empty expense', () => {
//     const result = addExpense({});
//     expect(result).toEqual({
//         type:'ADD_EXPENSE',
//         expense: {
//             description: '',
//             id: expect.any(String),
//             note: '',
//             amount: 0,
//             createdAt: 0
//         }
//     })
// })