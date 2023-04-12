import { useQuery, UseQueryResult } from "react-query";

import { getUser } from "../fetchs/User";
import { User } from "../interfaces/User/User";
import { HandleError } from "../interfaces/Error/Error";

export const useUser = (id: string): UseQueryResult<User, HandleError> => {
  return useQuery<User, HandleError>(["users", id], () => getUser(id), {
    enabled: false,
  });
};
