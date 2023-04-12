import {
  ChangeEvent,
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useState,
} from "react";

import { FormError } from "../interfaces/Error/FormError";

export const useForm = (
  initialState: any,
  validation: (data: any, onError: Dispatch<SetStateAction<FormError>>) => void,
  onSubmit: () => void
) => {
  //Form values
  const [values, setValues] = useState(initialState);
  //Errors
  const [errors, setErrors] = useState<FormError>({});

  useEffect(() => {
    validation(values, setErrors);
  }, [values]);

  //A method to handle form inputs
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    //To stop default events
    event.persist();

    let name = event.target.name;
    let value = event.target.value;

    //Let's set these values in state
    setValues({
      ...values,
      [name]: value,
    });
  };

  //A method to handle form submit
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    if (event) event.preventDefault();

    if (Object.keys(errors).length === 0 && Object.keys(values).length !== 0) {
      onSubmit();
    } else {
      alert("There is an Error!");
    }
  };

  const resetState = () => {
    setValues(initialState);
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
    resetState,
  };
};
