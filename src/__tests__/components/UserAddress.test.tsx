import { fireEvent, render } from "@testing-library/react";
import UserAddress from "../../components/UserAddress/UserAddress";
import { ThemeProvider } from "styled-components";
import theme from "../../themes/theme";

const deleteAddress = jest.fn();

const address = {
  street: "C. Gral. Sóstenes Rocha, #307",
  city: "Villa de Álvarez",
  country: "México",
  postalcode: "28984",
  deleteAddress,
};

const setUp = () => {
  const utils = render(
    <ThemeProvider theme={theme}>
      <UserAddress {...address} />
    </ThemeProvider>
  );
  return {
    ...utils,
  };
};

describe("UserAddress component", () => {
  test("should render", () => {
    const { getByAltText } = setUp();
    const deleteIcon = getByAltText("delete-address-icon");
    expect(deleteIcon).toBeInTheDocument();
  });

  test("should call deleteAddress once", () => {
    const { getByAltText } = setUp();
    const deleteIcon = getByAltText("delete-address-icon");
    fireEvent.click(deleteIcon);
    expect(deleteAddress.call.length).toEqual(1);
  });
});
