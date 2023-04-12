import styled from "styled-components";

export const UserContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  padding: 20px;
  margin: 0 auto;
  width: fit-content;
  height: 70px;
  background-color: #333333;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    height: 100px;
  }

  &:hover div {
    margin-top: 10px;
  }
`;

export const UserName = styled.h3``;

export const UserActions = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 30px;
  transition: all 0.3s ease;

  & img {
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
      brightness(102%) contrast(102%);
    cursor: pointer;

    &:first-of-type {
      margin-right: 5px;
    }
  }
`;
