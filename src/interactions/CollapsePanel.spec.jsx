import CollapsePanel from './CollapsePanel';
import React from 'react';

import { shallow } from 'enzyme';

it('is collapsed by default', () => {
    const wrapper = shallow(
        <CollapsePanel>
            <span>Some contents here</span>
        </CollapsePanel>
    );

    expect(wrapper.find('.collapse-panel')).toHaveLength(1);
    expect(wrapper.find('.collapse-panel-content')).toHaveLength(0);
});

it('uncollapses after clicking', () => {
    const wrapper = shallow(
        <CollapsePanel>
            <span>Some contents here</span>
        </CollapsePanel>
    );

    wrapper.find('.collapse-panel-toggle').simulate('click');

    expect(wrapper.find('.collapse-panel-content')).toHaveLength(1);
});

it('sets isCollapsed to false after clicking', () => {
    const wrapper = shallow(
        <CollapsePanel>
            <span>Some contents here</span>
        </CollapsePanel>
    );

    wrapper.find('.collapse-panel-toggle').simulate('click');

    expect(wrapper.state().isCollapsed).toBe(false);
    expect(wrapper.state('isCollapsed')).toBe(false);
});
