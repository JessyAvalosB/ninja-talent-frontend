import UserItem from "../UserItem/UserItem";
import { UserProps } from "../../interfaces/User/User";
import RegularList from "../Lists/RegularList/RegularList";

const Users = ({ users }: UserProps): JSX.Element => {
  return (
    <>
      {users && (
        <RegularList
          items={users}
          resourceName="user"
          itemComponent={UserItem}
        />
      )}
    </>
  );
};

export default Users;
