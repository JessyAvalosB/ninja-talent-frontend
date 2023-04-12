import styled from "styled-components";
import Icon from "../Icon/Icon";

export const UserAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background_light};
  padding: 15px;
  border-radius: 5px;

  &:hover img {
    opacity: 1;
  }

  &:not(:last-of-type) {
    margin-bottom: 15px;
  }
`;

export const UserAddressDelete = styled(Icon)`
  align-self: end;
  position: absolute;
  opacity: 0;
  filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(288deg)
    brightness(102%) contrast(102%);
  cursor: pointer;
  transition: all 0.3s ease-in-out;
`;
