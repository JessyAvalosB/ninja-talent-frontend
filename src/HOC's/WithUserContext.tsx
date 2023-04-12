import { UserContext } from "../providers/UserProvider/UserProvider";

const WithUserContext = (Component: any) => {
  return (props: any) => {
    return (
      <UserContext.Consumer>
        {(state) => <Component {...props} context={state} />}
      </UserContext.Consumer>
    );
  };
};

export default WithUserContext;
