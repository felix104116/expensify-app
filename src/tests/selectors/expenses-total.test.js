import getExpensesTotal from '../../selectors/expenses-total';
import expenses,{singleExpense} from '../fixtures/expenses';
test('should return the sum of multiple expenses', () => {
    const result = getExpensesTotal(expenses);
    expect(result).toBe(95495);
})
test('should return the sum of a single expenses', () => {
    const result = getExpensesTotal([expenses[0]]);
    expect(result).toBe(expenses[0].amount);
})
test('should return zero because no expense', () => {
    const result = getExpensesTotal([]);
    expect(result).toBe(0);
})