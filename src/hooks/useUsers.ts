import { useQuery, UseQueryResult } from "react-query";

import { getUsers } from "../fetchs/User";
import { User } from "../interfaces/User/User";
import { HandleError } from "../interfaces/Error/Error";

export const useUsers = (): UseQueryResult<User[], HandleError> => {
  return useQuery<User[], HandleError>("users", getUsers);
};
