import Input from "../Input/Input";
import Modal from "../../layouts/Modal/Modal";

import { EditUserForm } from "./Style";
import { useForm } from "../../hooks/useForm";
import { AddAddressForm, Address } from "../../interfaces/User/User";
import { ModalProps } from "../../interfaces/Modal/Modal";
import { validateAddress } from "../../helpers/validations/addAddress.validation";

const AddAddress = (props: AddAddressForm) => {
  const { shouldShow, onClose, setAddresses } = props;
  let initialState: Address = {
    street: "",
    city: "",
    country: "",
    postalcode: "",
  };

  const { errors, handleSubmit, handleChange, values, resetState } = useForm(
    initialState,
    validateAddress,
    () => {
      setAddresses((prevState: any) => [...prevState, values]);
      resetState();
      onClose();
    }
  );

  const modalConfig: ModalProps = {
    title: "Add Address",
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
      <EditUserForm>
        <Input
          label="Street"
          name="street"
          value={values?.street}
          onChange={handleChange}
          errorMessage={errors?.street}
        />
        <Input
          label="City"
          name="city"
          value={values?.city}
          onChange={handleChange}
          errorMessage={errors?.city}
        />
        <Input
          label="Country"
          name="country"
          value={values?.country}
          onChange={handleChange}
          errorMessage={errors?.country}
        />
        <Input
          label="Postal Code"
          name="postalcode"
          value={values?.postalcode}
          onChange={handleChange}
          errorMessage={errors?.postalcode}
        />
      </EditUserForm>
    </Modal>
  );
};

export default AddAddress;
