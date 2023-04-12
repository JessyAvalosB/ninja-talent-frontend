import React from "react";
import { GridBase } from "./Style";

export interface GridBaseTypes {
  minWidth?: string;
}

interface GridProps extends GridBaseTypes {
  children: React.ReactNode;
}

const Grid = ({ minWidth = "100px", children }: GridProps): JSX.Element => {
  return <GridBase minWidth={minWidth}>{children}</GridBase>;
};

export default Grid;
