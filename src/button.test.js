import React from "react";
import { mount } from "enzyme";

import { Button } from "./button";

describe("Button", () => {
  it("should react on click", () => {
    const handleClick = jest.fn();
    const button = mount(<Button onClick={handleClick} />);

    expect(handleClick).not.toHaveBeenCalled();
    button.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });

  it("should not react on click when disabled", () => {
    const handleClick = jest.fn();
    const button = mount(<Button disabled onClick={handleClick} />);

    expect(handleClick).not.toHaveBeenCalled();
    button.simulate("click");
    expect(handleClick).toHaveBeenCalled();
  });
});
