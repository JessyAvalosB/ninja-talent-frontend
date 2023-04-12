import { Dispatch, SetStateAction } from "react";

import { Address } from "../../interfaces/User/User";
import { FormError } from "../../interfaces/Error/FormError";

export const validateAddress = (
  address: Address,
  setErrors: Dispatch<SetStateAction<FormError>>
) => {
  for (const key in address) {
    if (address[key] === "") {
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
};
