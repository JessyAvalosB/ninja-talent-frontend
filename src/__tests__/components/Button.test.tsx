import { ThemeProvider } from "styled-components";
import { cleanup, fireEvent, render, screen, } from "@testing-library/react";

import theme from "../../themes/theme";
import Button, { ButtonVariant } from "../../components/Button/Button";

const ComponentToRender = (props: any) => {
  return (
    <ThemeProvider theme={theme}>
      <Button data-testid="btn-test" {...props}>
        Test Button
      </Button>
    </ThemeProvider>
  );
};

afterEach(cleanup);

describe("Button Component", () => {
  test("should render component", () => {
    render(<ComponentToRender variant={ButtonVariant.primary} />);
    const button = screen.getByText("Test Button");
    expect(button).toBeInTheDocument();
  });

  test("should render primary button", () => {
    render(<ComponentToRender variant={ButtonVariant.primary} />);
    const button = screen.getByText("Test Button").closest("button");
    expect(button).toHaveStyle(
      `background-color: ${theme.colors.primaryColor}`
    );
  });

  test("should render secondary button", () => {
    render(<ComponentToRender variant={ButtonVariant.secondary} />);
    const button = screen.getByText("Test Button").closest("button");
    expect(button).toHaveStyle(
      `background-color: ${theme.colors.secondaryColor}`
    );
  });

  test("should fire click event one time", () => {
    const onClick = jest.fn();
    render(
      <ComponentToRender variant={ButtonVariant.primary} onClick={onClick} />
    );
    const button = screen.getByText("Test Button");
    fireEvent.click(button);
    expect(onClick.mock.calls.length).toEqual(1);
  });
});
