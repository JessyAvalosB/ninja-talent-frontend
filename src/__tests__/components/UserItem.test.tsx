import { cleanup, fireEvent, render, waitFor } from "@testing-library/react";

import UserItem from "../../components/UserItem/UserItem";
import UserProvider from "../../providers/UserProvider/UserProvider";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const user = {
  _id: "641fa73861d320a00aa5ee2f",
  firstname: "Jessy p",
  lastname: "Avalos Barrales",
  birthDate: "1997-08-04",
  email: "jessyavalos16@outlook.es",
  address: [
    {
      street: "C. Gral. Sóstenes Rocha, #307",
      city: "Villa de Álvarez",
      country: "México",
      postalcode: "28984",
    },
  ],
};

const queryClient = new QueryClient();

const deleteUser = jest.fn();
const updateUser = jest.fn();

afterEach(cleanup);

const setUp = () => {
  const utils = render(
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <UserProvider>
          <UserItem user={user} />
        </UserProvider>
      </BrowserRouter>
    </QueryClientProvider>
  );
  return {
    ...utils,
  };
};

describe("UserItem component", () => {
  test("should render", async () => {
    const { getByText } = setUp();
    const userName = await waitFor(() => getByText("jessyavalos16@outlook.es"));
    expect(userName).toBeInTheDocument();
  });

  test("should call updateUser once", async () => {
    const { getByAltText } = setUp();
    const updateButton = await waitFor(() => getByAltText("edit-icon"));
    fireEvent.click(updateButton);
    expect(updateUser.call.length).toEqual(1);
  });

  test("should call deleteUser once", async () => {
    const { getByAltText } = setUp();
    const deleteButton = await waitFor(() => getByAltText("delete-icon"));
    fireEvent.click(deleteButton);
    expect(deleteUser.call.length).toEqual(1);
  });
});
