import React from "react";
import { mount, configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import SortingVisualizer from "./sortingvisualizer";

configure({ adapter: new Adapter() });

it("Generate array button is present", () => {
  let props = {};
  const wrapper = shallow(<SortingVisualizer props={props} />);
  // console.log(wrapper);
  expect(wrapper.find("[data-test='generate-new-array-btn']")).toHaveLength(1);
});

it("Expect resetArray() to be called on click of Generate array button", () => {
  const resetArray = jest.fn();
  let props = {
    resetArray: resetArray
  };
  const wrapper = shallow(<SortingVisualizer {...props} />);
  console.log(wrapper.instance());
  wrapper.find("[data-test='generate-new-array-btn']").at(0).simulate("click");
  expect(resetArray).toBeCalled();
});
