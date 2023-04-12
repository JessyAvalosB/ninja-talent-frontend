import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoaderContainer = styled.div`
  position: fixed;
  top: calc(50% - 40px);
  left: calc(50% - 40px);
`;

export const LoaderBase = styled.span`
  display: block;
  border: 10px solid #333333;
  border-top: 10px solid #1e1e1e;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: ${spin} 1s linear infinite;
`;
