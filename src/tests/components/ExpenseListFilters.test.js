import React from 'react';
import moment from 'moment';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {shallow} from 'enzyme';
import { filters, defaultFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;
beforeAll(() => {
    setTextFilter = jest.fn();
    sortByDate = jest.fn();
    sortByAmount = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters 
            filters={defaultFilters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
})

test('Should render expenseListFilters', () => {
    expect(wrapper).toMatchSnapshot();
})

test('Should render expenseListFilters with right data', () => {
    wrapper.setProps({
        filters
    })
    expect(wrapper).toMatchSnapshot();
})

test('Should filter by text', () => {
    wrapper.find('input').simulate('change', {
        target: {
            value: filters.text
        }
    })
    expect(setTextFilter).toHaveBeenLastCalledWith(filters.text);
})

test('Should sort by date', () => {
    wrapper.setProps({
        filters
    })
    wrapper.find('select').simulate('change',{
        target: {
            value: defaultFilters.sortBy
        }
    })
    expect(sortByDate).toHaveBeenCalled();
})

test('Should sort by amount', () => {
    wrapper.find('select').simulate('change',{
        target: {
            value: filters.sortBy
        }
    })
    expect(sortByAmount).toHaveBeenCalled();
})

// test('Should handle date change', () => {
//     const startDate = moment(0).add(3,'years');
//     const endDate = moment(0).add(8,'years');

//     wrapper.find('withStyles(DateRangePicker)').prop('onDatesChange')({startDate,endDate})
//     //wrapper.find('DateRangePicker').prop('onDatesChange')({startDate,endDate});
//     expect(startDate).toHaveBeenLastCalledWith(startDate);
//     expect(endDate).toHaveBeenLastCalledWith(endDate);
// })

// test('Should handle date focus changes', () => {
//     const calenderFocused = 'endDate';
//     wrapper.find('withStyles(DateRangePicker)').prop('onFocusChange')(calenderFocused);
//     expect(wrapper.state('calenderFocused')).toBe(calenderFocused);
// })