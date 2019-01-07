import React from 'react';
import { shallow } from 'enzyme';
import ExpensedashboardPage from '../../components/ExpenseDashboardPage';

test('should render ExpenseDashboardPage correctly', () => {
    const wrapper = shallow(<ExpensedashboardPage />);
    expect(wrapper).toMatchSnapshot();
});