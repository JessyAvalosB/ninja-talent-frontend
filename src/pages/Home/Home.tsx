import { useEffect, useState } from "react";

import Grid from "../../layouts/Grid/Grid";
import Users from "../../components/Users/Users";
import Loader from "../../components/Loader/Loader";

import { useUsers } from "../../hooks/useUsers";
import UserProvider from "../../providers/UserProvider/UserProvider";
import AddUser from "../../components/AddUser/AddUser";
import { ControlContainer } from "./Style";
import Button, { ButtonVariant } from "../../components/Button/Button";

const Home = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const { isLoading, data = [], error, refetch } = useUsers();

  useEffect(() => {
    refetch();
  }, []);

  return (
    <>
      <ControlContainer>
        <Button
          variant={ButtonVariant.primary}
          onClick={() => setShouldShow(true)}
        >
          Add User
        </Button>
      </ControlContainer>
      <UserProvider>
        <Grid minWidth="220px">
          {isLoading && <Loader />}
          <Users users={data} />
          {error && <span>{error.message}</span>}
        </Grid>
      </UserProvider>
      <AddUser shouldShow={shouldShow} onClose={() => setShouldShow(false)} />
    </>
  );
};

export default Home;
