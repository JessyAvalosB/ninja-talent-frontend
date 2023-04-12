import { UserAddressContainer, UserAddressDelete } from "./Style";

export interface UserAddressProps {
  street: string;
  city: string;
  country: string;
  postalcode: string;
  deleteAddress: () => void;
}

const UserAddress = (props: UserAddressProps) => {
  const { city, country, postalcode, street, deleteAddress } = props;
  return (
    <UserAddressContainer>
      <UserAddressDelete
        icon="https://www.svgrepo.com/show/438434/delete-round.svg"
        alt="delete-address-icon"
        height="24px"
        width="24px"
        onClick={deleteAddress}
      />
      <p>
        <b>{street}</b>, {city}, {country}, {postalcode}
      </p>
    </UserAddressContainer>
  );
};

export default UserAddress;
