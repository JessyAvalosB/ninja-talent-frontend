import { useEffect, useState } from "react";

import Grid from "../../layouts/Grid/Grid";
import Users from "../../components/Users/Users";
import Loader from "../../components/Loader/Loader";
import AddUser from "../../components/AddUser/AddUser";
import UserProvider from "../../providers/UserProvider/UserProvider";
import Button, { ButtonVariant } from "../../components/Button/Button";

import { ControlContainer } from "./Style";
import { useUsers } from "../../hooks/useUsers";

const Home = () => {
  const [shouldShow, setShouldShow] = useState(false);
  const { isLoading, data = [], refetch } = useUsers();

  useEffect(() => {
    refetch();
  }, []);

  if (isLoading) {
    return <Loader />;
  }

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
          <Users users={data} />
        </Grid>
      </UserProvider>
      <AddUser shouldShow={shouldShow} onClose={() => setShouldShow(false)} />
    </>
  );
};

export default Home;
