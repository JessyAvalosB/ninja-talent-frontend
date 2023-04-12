import { Dispatch, SetStateAction } from "react";

import { User } from "../../interfaces/User/User";
import { FormError } from "../../interfaces/Error/FormError";

export const validateAddUser = (
  user: User,
  setErrors: Dispatch<SetStateAction<FormError>>
) => {
  for (const key in user) {
    if (key !== "address") {
      if (user[key] === "") {
        setErrors((prevState) => ({
          ...prevState,
          [key]: "This field is required.",
        }));
      } else {
        setErrors((prevState) => {
          delete prevState[key];
          return prevState;
        });
      }
    }
  }
};
