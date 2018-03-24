import React from "react";
import { shallow } from "enzyme";

import AddBeerButton from "./AddBeerButton";

it("calls event handler when clicked", () => {
  const handleClick = jest.fn();

  const wrapper = shallow(<AddBeerButton onClick={handleClick} />);

  wrapper.find("button").simulate("click");

  expect(handleClick).toHaveBeenCalledTimes(1);
});
