import Beer from "./Beer";
import React from "react";

import { shallow, render, mount } from "enzyme";

it("renders a beer", () => {
  const beer = {
    name: "Mudpuppy Porter",
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper.find(".beer")).toHaveLength(1);
  expect(wrapper.contains(<h1>Mudpuppy Porter</h1>)).toBe(true);
});

it("doesn`t shallow render brewery", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper.find(".brewery")).toHaveLength(0);
  expect(wrapper.contains(<h2 className="brewery">Central Waters</h2>)).toBe(
    false
  );
});

it("renders brewery", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = render(<Beer beer={beer} />);

  expect(wrapper.find(".brewery")).toHaveLength(1);
});

it("deep renders brewery", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = mount(<Beer beer={beer} />);

  expect(wrapper.find(".brewery")).toHaveLength(1);
  expect(wrapper.contains(<h2 className="brewery">Central Waters</h2>)).toBe(
    true
  );
});

it("snapshots a beer with shallow", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = shallow(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});

it("snapshots a beer with render", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = render(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});

it("snapshots a beer with mount", () => {
  const beer = {
    name: "Mudpuppy Porter",
    brewery: "Central Waters",
  };

  const wrapper = mount(<Beer beer={beer} />);

  expect(wrapper).toMatchSnapshot();
});
