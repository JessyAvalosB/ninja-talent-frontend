import { ChangeEvent, useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useMutation, useQueryClient } from "react-query";

import {
  EditUserAddAddress,
  EditUserAddressContainer,
  EditUserContainer,
  EditUserFooterForm,
  EditUserForm,
} from "./Style";

import Input from "../../components/Input/Input";
import Loader from "../../components/Loader/Loader";
import AddAddress from "../../components/AddAddress/AddAddress";
import UserAddress from "../../components/UserAddress/UserAddress";
import Button, { ButtonVariant } from "../../components/Button/Button";

import { getUser, updateUser } from "../../fetchs/User";
import { Address, User } from "../../interfaces/User/User";
import { FormError } from "../../interfaces/Error/FormError";
import { validateAddUser } from "../../helpers/validations/addUser.validation";

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [errors, setErrors] = useState<FormError>({});
  const [addresses, setAddresses] = useState<Address[]>([]);
  const [shouldShow, setShouldShow] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const res = await getUser(id!);
      setUser(res);
      setAddresses(res.address);
    })();
  }, []);

  useEffect(() => {
    validateAddUser(user!, setErrors);
  }, [user]);

  const mutation = useMutation(updateUser, {
    onSuccess: () => {
      navigate("/");
    },
  });

  const onSubmit = () => {
    mutation.mutate({ ...user!, address: addresses });
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    event.persist();

    const { name, value } = event.target;

    setUser((prevState) => ({
      ...prevState!,
      [name]: value,
    }));
  };

  const handleDeleteAddress = (index: number) =>
    setAddresses((prevState) => prevState.filter((address, i) => i !== index));

  if (!user) {
    return <Loader />;
  }

  return (
    <EditUserContainer>
      <EditUserForm>
        <Input
          label="First Name"
          name="firstname"
          value={user.firstname}
          onChange={handleChange}
          errorMessage={errors?.firstname}
        />
        <Input
          label="Last Name"
          name="lastname"
          value={user.lastname}
          onChange={handleChange}
          errorMessage={errors?.lastname}
        />
        <Input
          label="Birthdate"
          name="birthDate"
          value={user.birthDate}
          type="date"
          onChange={handleChange}
          errorMessage={errors?.birthDate}
        />
        <Input
          label="Email"
          name="email"
          value={user.email}
          type="email"
          onChange={handleChange}
          errorMessage={errors?.email}
        />

        <EditUserAddAddress
          variant={ButtonVariant.primary}
          onClick={() => setShouldShow(true)}
        >
          Add Address
        </EditUserAddAddress>

        {addresses.length > 0 && (
          <EditUserAddressContainer>
            {addresses.map((address, index) => {
              return (
                <UserAddress
                  key={index}
                  deleteAddress={() => handleDeleteAddress(index)}
                  {...address}
                />
              );
            })}
          </EditUserAddressContainer>
        )}

        <EditUserFooterForm>
          <Button
            variant={ButtonVariant.secondary}
            onClick={() => navigate("/")}
          >
            Cancel
          </Button>
          <Button
            variant={ButtonVariant.primary}
            disabled={Object.entries(errors).length > 0}
            onClick={() => onSubmit()}
          >
            Update User
          </Button>
        </EditUserFooterForm>
      </EditUserForm>

      <AddAddress
        shouldShow={shouldShow}
        setAddresses={setAddresses}
        onClose={() => setShouldShow(false)}
      />
    </EditUserContainer>
  );
};

export default EditUser;
