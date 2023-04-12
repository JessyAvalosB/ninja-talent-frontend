import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Input from "../../components/Input/Input";

afterEach(cleanup);

const setup = () => {
  const utils = render(
    <Input label="Test Input" placeholder="Test Placeholder" />
  );
  const input = screen.getByPlaceholderText("Test Placeholder");
  return {
    input,
    ...utils,
  };
};

describe("Input Component", () => {
  test("should render ", () => {
    const { input } = setup();
    expect(input).toBeInTheDocument();
  });

  test("should change value", () => {
    const { input, getByDisplayValue } = setup();
    fireEvent.change(input, {
      target: {
        value: "test",
      },
    });
    expect(getByDisplayValue("test")).toBeInTheDocument();
  });
});
