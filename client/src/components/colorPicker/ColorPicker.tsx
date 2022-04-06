import React from "react";
import { Color } from "../../types/Models";
import { Container } from "./ColorPickerStyles";

type StateProps = {
  color: Color;
  onClick: () => void;
  selected?: boolean;
};
export const ColorPicker = ({
  color,
  onClick,
  selected = false,
}: StateProps) => {
  return (
    <Container
      className={selected ? "selected" : ""}
      color={color}
      onClick={onClick}
    ></Container>
  );
};
