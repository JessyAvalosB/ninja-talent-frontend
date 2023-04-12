import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import { deleteUser } from "../../fetchs/User";
import {
  UserContextTypes,
  UserProviderTypes,
} from "../../interfaces/User/User";

export const UserContext = createContext<UserContextTypes | null>(null);

const UserProvider = ({ children }: UserProviderTypes) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation(deleteUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });
  return (
    <UserContext.Provider
      value={{
        deleteUser: (id: string) => {
          mutation.mutate(id);
        },
        updateUser: (id: string) => {
          navigate(`/edit/${id}`);
        },
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
