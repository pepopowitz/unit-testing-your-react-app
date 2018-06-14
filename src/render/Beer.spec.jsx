import Beer from './Beer';
import React from 'react';
import { shallow, render, mount } from 'enzyme';

import toLookLike from '../testing/to-look-like';
import Placeholder from '../testing/Placeholder';

// It is tempting to do this in your "setupTests.js" (create-react-app), or
//  wherever the setupTestFrameworkScriptFile property points in your
//  jest config.
// Unfortunately, html-looks-like is heavy - and extending expect for every single
//  test suite makes your tests SLOW.
// So opt-in to the toLookLike function only for the tests that need it.
expect.extend({
  toLookLike,
});

it('renders a beer', () => {
  const beer = {
    name: 'Mudpuppy Porter',
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper.find('.beer')).toHaveLength(1);
  expect(wrapper.contains(<h1>Mudpuppy Porter</h1>)).toBe(true);
});

it('doesn`t shallow render brewery', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper.find('.brewery')).toHaveLength(0);
  expect(wrapper.contains(<h2 className="brewery">Central Waters</h2>)).toBe(
    false
  );
});

it('renders brewery', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = render(<Beer beer={beer} />);

  expect(wrapper.find('.brewery')).toHaveLength(1);
});

it('deep renders brewery', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = mount(<Beer beer={beer} />);

  expect(wrapper.find('.brewery')).toHaveLength(1);
  expect(wrapper.contains(<h2 className="brewery">Central Waters</h2>)).toBe(
    true
  );
});

it('snapshots a beer with shallow', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});

it('snapshots a beer with render', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = render(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});

it('snapshots a beer with mount', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'Central Waters',
  };

  const wrapper = mount(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});

// This uses htmlLooksLike, and passes in a string.
//  It's not as pretty. Strings of HTML are hard to read & manage.
//  But it is sometimes more performant than rendering a second JSX element (see the next test).
it('looks like a beer (string)', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'who cares',
  };

  const wrapper = render(<Beer beer={beer} />);

  const expected = `
    <article class="beer">
      <h1>Mudpuppy Porter</h1>
      {{}}
    </article>
  `;
  expect(wrapper).toLookLike(expected);
});

// This uses htmlLooksLike, and passes a JSX object as the expected.
//  It looks beautiful! It's how I'd want my tests to read.
//  But it is sometimes less performant. Shallow rendering the second JSX element comes with a penalty.
// You make the call - do I care that these nice to read tests are taking a bit longer?
//  Especially if 99% of the time I'm just running the tests for things that have changed?
//  Or do I want my tests to be as fast as possible, readability be damned?
it('looks like a beer (jsx)', () => {
  const beer = {
    name: 'Mudpuppy Porter',
    brewery: 'who cares',
  };

  const wrapper = render(<Beer beer={beer} />);

  const expected = (
    <article className="beer">
      <h1>Mudpuppy Porter</h1>
      <Placeholder for="brewery" />
    </article>
  );

  expect(wrapper).toLookLike(expected);
});
