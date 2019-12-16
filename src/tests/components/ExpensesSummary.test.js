import expenses from '../fixtures/expenses';
import {ExpensesSummary} from '../../components/ExpensesSummary';
import React from 'react';
import {shallow} from 'enzyme';


test('should render ExpensesSummary component', () => {
    const layout = shallow(<ExpensesSummary expenseCount={1} expenseTotal={300}/>);
    expect(layout).toMatchSnapshot();
})

test('should render ExpensesSummary with multiples expenses', () => {
    const layout = shallow(<ExpensesSummary expenseCount={7} expenseTotal={85895894}/>);
    expect(layout).toMatchSnapshot();
})