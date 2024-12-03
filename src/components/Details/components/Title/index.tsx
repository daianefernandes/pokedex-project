import React from "react";
import { TitleText } from "./styles";

interface Props {
  content: string;
  backgroundSelected: string;
}

export const Title = ({ content, backgroundSelected }: Props) => {
  return (
    <TitleText backgroundSelected={backgroundSelected}>{content}</TitleText>
  );
};