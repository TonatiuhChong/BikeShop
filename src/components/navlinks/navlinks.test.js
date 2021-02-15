import React from "react";
import { shallow } from "enzyme";
import Navlinks from "./navlinks";

describe("Navlinks", () => {
  test("matches snapshot", () => {
    const wrapper = shallow(<Navlinks />);
    expect(wrapper).toMatchSnapshot();
  });
});
