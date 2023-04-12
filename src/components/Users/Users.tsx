import UserItem from "../UserItem/UserItem";
import { UserProps } from "../../interfaces/User/User";
import RegularList from "../Lists/RegularList/RegularList";

const Users = ({ users }: UserProps): JSX.Element => {
  return (
    <>
      {users.length === 0 && (
        <h1 style={{ justifySelf: "center" }}>
          There are no users, create new one.
        </h1>
      )}
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
