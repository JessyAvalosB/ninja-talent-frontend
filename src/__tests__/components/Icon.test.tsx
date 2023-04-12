import { cleanup, fireEvent, render, screen } from "@testing-library/react";

import Icon from "../../components/Icon/Icon";

afterEach(cleanup);

const onClick = jest.fn();

const setUp = () => {
  const iconConfig = {
    icon: "https://www.svgrepo.com/show/509911/edit.svg",
    alt: "edit-icon",
    height: "25px",
    width: "25px",
    onClick,
  };
  const utils = render(<Icon {...iconConfig} />);
  const icon = screen.getByAltText("edit-icon");
  return {
    icon,
    ...utils,
  };
};

describe("Icon component", () => {
  test("should render", () => {
    const { icon } = setUp();
    expect(icon).toBeInTheDocument();
  });

  test("should click once", () => {
    const { icon } = setUp();
    fireEvent.click(icon);
    expect(onClick.call.length).toEqual(1);
  });

  test("should have 25px width", () => {
    const { icon } = setUp();
    expect(icon).toHaveStyle("width: 25px; height: 25px;");
  });
});
