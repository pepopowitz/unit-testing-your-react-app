import React from 'react';
import { shallow } from 'enzyme';

import AddEventButton from './AddEventButton';

it('calls event handler when clicked', () => {
    const handleClick = jest.fn();

    const wrapper = shallow(<AddEventButton onClick={handleClick} />);

    wrapper.find('button').simulate('click');

    expect(handleClick).toHaveBeenCalledTimes(1);
});
