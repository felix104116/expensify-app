import {addExpense,removeExpense,editExpense} from '../../actions/expenses';

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
    const expenseData = {
        description: 'Rent',
        amount:'75000',
        createdAt:3000,
        note:'This was last months rent'
    };
    const result = addExpense(expenseData);
    expect(result).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,
            id: expect.any(String)
        }
    })
})

test('Should add an empty expense', () => {
    const result = addExpense({});
    expect(result).toEqual({
        type:'ADD_EXPENSE',
        expense: {
            description: '',
            id: expect.any(String),
            note: '',
            amount: 0,
            createdAt: 0
        }
    })
})