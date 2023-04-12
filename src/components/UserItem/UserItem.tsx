import Icon from "../Icon/Icon";
import WithUserContext from "../../HOC's/WithUserContext";

import { UserActions, UserContainer, UserName } from "./Style";
import { UserItemProps } from "../../interfaces/User/User";

const UserItem = ({ user, context }: UserItemProps) => {
  const icons = {
    edit: {
      icon: "https://www.svgrepo.com/show/509911/edit.svg",
      alt: "edit-icon",
      height: "25px",
      width: "25px",
      onClick: () => context.updateUser(user._id!),
    },
    delete: {
      icon: "https://www.svgrepo.com/show/502608/delete-2.svg",
      alt: "delete-icon",
      height: "25px",
      width: "25px",
      onClick: () => context.deleteUser(user._id!),
    },
  };

  return (
    <UserContainer>
      <UserName>{`${user.firstname} ${user.lastname}`}</UserName>
      <span>{user.birthDate}</span>
      <span>{user.email}</span>
      <UserActions>
        <Icon {...icons.edit} />
        <Icon {...icons.delete} />
      </UserActions>
    </UserContainer>
  );
};

export default WithUserContext(UserItem);
