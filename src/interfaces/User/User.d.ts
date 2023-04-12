import { ModalParentProps } from "../Modal/Modal";

export interface User {
  _id?: string;
  firstname: string;
  lastname: string;
  email: string;
  birthDate: string;
  address?: Address[] | null;
  [key: string]: any;
}

export interface Address {
  street: string;
  city: string;
  country: string;
  postalcode: string;
  [key: string]: any;
}

export interface AddAddressForm extends ModalParentProps {
  setAddresses: Dispatch<SetStateAction<Address[]>>;
}

export interface UserProps {
  users: User[];
}

export interface UserItemProps {
  user: User;
  context: any;
}

export interface UserContextTypes {
  updateUser: (id: string) => void;
  deleteUser: (id: string) => void;
  [key: string]: any;
}

export interface UserProviderTypes {
  children: React.ReactNode;
}
