import styled from "styled-components";
import { GridBaseTypes } from "./Grid";

export const GridBase = styled.div<GridBaseTypes>`
  display: grid;
  gap: 1rem;
  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minWidth }) => minWidth}, 1fr)
  );
`;
