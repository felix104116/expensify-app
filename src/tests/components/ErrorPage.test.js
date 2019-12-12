import ErrorPage from '../../components/ErrorPage';
import React from 'react';
import {shallow} from 'enzyme';

test('show render error page', () => {
    const wrapper = shallow(<ErrorPage/>);
    expect(wrapper).toMatchSnapshot();
})