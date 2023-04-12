import { useMutation, useQueryClient } from "react-query";

import Input from "../Input/Input";
import Modal from "../../layouts/Modal/Modal";

import { AddUserForm } from "./Style";
import { postUser } from "../../fetchs/User";
import { useForm } from "../../hooks/useForm";
import { User } from "../../interfaces/User/User";
import { ModalParentProps, ModalProps } from "../../interfaces/Modal/Modal";
import { validateAddUser } from "../../helpers/validations/addUser.validation";

const AddUser = (props: ModalParentProps) => {
  const { shouldShow, onClose } = props;

  const initialState = {
    firstname: "",
    lastname: "",
    birthDate: "",
    email: "",
    address: [],
  };

  const queryClient = useQueryClient();

  const mutation = useMutation(postUser, {
    onSuccess: () => {
      queryClient.invalidateQueries("users");
    },
  });

  const onSubmit = (user: User) => {
    mutation.mutate(user);
  };

  const { errors, handleChange, values, handleSubmit, resetState } = useForm(
    initialState,
    validateAddUser,
    () => {
      onSubmit(values);
      onClose();
    }
  );

  const modalConfig: ModalProps = {
    title: "Add User",
    shouldShow,
    onClose: () => {
      resetState();
      onClose();
    },
    onSubmit: handleSubmit,
    disableSubmit: Object.keys(errors).length !== 0,
  };

  return (
    <Modal {...modalConfig}>
      <AddUserForm>
        <Input
          label="First Name"
          name="firstname"
          onChange={handleChange}
          errorMessage={errors?.firstname}
        />
        <Input
          label="Last Name"
          name="lastname"
          onChange={handleChange}
          errorMessage={errors?.lastname}
        />
        <Input
          label="Birthdate"
          name="birthDate"
          type="date"
          onChange={handleChange}
          errorMessage={errors?.birthDate}
        />
        <Input
          label="Email"
          name="email"
          type="email"
          onChange={handleChange}
          errorMessage={errors?.email}
        />
      </AddUserForm>
    </Modal>
  );
};

export default AddUser;
