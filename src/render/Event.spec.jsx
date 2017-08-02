import Event from './Event';
import React from 'react';

import { shallow, mount } from 'enzyme';
import toJson from 'enzyme-to-json';

it('renders an event', () => {
    const event = {
        name: 'MidwestJs'
    };

    const wrapper = shallow(<Event event={event} />);

    expect(wrapper.find('.event')).toHaveLength(1);
});

it('doesn`t shallow render dates', () => {
    const event = {
        name: 'MidwestJs',
        date: '2017-08-17'
    };

    const wrapper = shallow(<Event event={event} />);

    expect(wrapper.find('.event-date')).toHaveLength(0);
});

it('deep renders dates', () => {
    const event = {
        name: 'MidwestJs',
        date: '2017-08-17'
    };

    const wrapper = mount(<Event event={event} />);

    expect(wrapper.find('.event-date')).toHaveLength(1);
});

it('snapshots an event shallowly', () => {
    const event = {
        name: 'MidwestJs',
        date: '2017-08-17'
    };

    const wrapper = shallow(<Event event={event} />);

    expect(toJson(wrapper)).toMatchSnapshot();
});

it('snapshots an event deeply', () => {
    const event = {
        name: 'MidwestJs',
        date: '2017-08-17'
    };

    const wrapper = mount(<Event event={event} />);

    expect(toJson(wrapper)).toMatchSnapshot();
});
