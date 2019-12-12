import {setTextFilter,setStartDate,setEndDate,sortByAmount,sortByDate} from '../../actions/filters';
import moment from 'moment';

test('Should set the text filter by name', () => {
    const text = 'Some text';
    const result = setTextFilter(text);
    expect(result).toEqual({
        type: 'SET_TEXT_FILTER',
        text
    })
})

test('should generate set start date action object', () => {
    const result = setStartDate(moment(0));
    expect(result).toEqual({
        type:'SET_START_DATE',
        startDate:moment(0)
    })
})

test('should generate set start date action object', () => {
    const result = setEndDate(moment(0));
    expect(result).toEqual({
        type:'SET_END_DATE',
        endDate:moment(0)
    })
})

test('should sort by amount',() => {
    const result = sortByAmount();
    expect(result).toEqual({
        type:'SORT_BY_AMOUNT',
    })
})

test('should sort by date',() => {
    const result = sortByDate();
    expect(result).toEqual({
        type:'SORT_BY_DATE',
    })
})