import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 70%;
  width: inherit;
  margin-bottom: 10px;
`;

export const InputLabel = styled.label`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const InputBase = styled.input`
  height: 28px;
  padding-left: 5px;
  font-size: 14px;
  border-radius: 5px;

  &:focus-visible {
    outline: unset;
  }
`;

export const InputError = styled.span`
  margin-top: 5px;
  font-size: 12px;
  color: ${({ theme }) => theme.colors.primaryColor};
`;
