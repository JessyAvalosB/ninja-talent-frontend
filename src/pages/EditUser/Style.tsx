import styled from "styled-components";
import Button from "../../components/Button/Button";

export const EditUserContainer = styled.div`
  display: grid;
  place-items: center;
  margin-top: 10px;
`;

export const EditUserForm = styled.form`
  display: flex;
  flex-direction: column;
  align-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 60%;
`;

export const EditUserAddressContainer = styled.div`
  margin-top: 30px;
  max-height: 160px;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const EditUserFooterForm = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;

  & button:first-of-type {
    margin-right: 10px;
  }
`;

export const EditUserAddAddress = styled(Button)`
  margin-top: 10px;
  align-self: end;
`;
