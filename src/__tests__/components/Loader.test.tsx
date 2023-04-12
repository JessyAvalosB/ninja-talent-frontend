import { render } from "@testing-library/react";
import Loader from "../../components/Loader/Loader";

const setUp = () => {
  const utils = render(<Loader data-testid="loader-test" />);
  return {
    ...utils,
  };
};

describe("Loader Component", () => {
  test("should render", () => {
    const { getByTestId } = setUp();
    const loader = getByTestId("loader-test");
    expect(loader).toBeInTheDocument();
  });
});
