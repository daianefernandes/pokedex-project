import React from "react";
import { LoaderStyled } from "./styles";

interface Props {
  color: string;
  size?: number;
}

export const Loader: React.FC<Props> = ({ size, color }) => {
  return <LoaderStyled size={size} color={color} />;
};
