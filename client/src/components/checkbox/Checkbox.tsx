import React from "react";
import { Checkmark, Container, Input, Overlay } from "./CheckboxStyles";

type StateProps = {
  onChange: () => void;
  checked?: boolean;
};
export const Checkbox = ({ onChange, checked = false }: StateProps) => {
  return (
    <Container >
      <Overlay />
      <Input onChange={onChange} type={"checkbox"} checked={checked} />
      <Checkmark />
    </Container>
  );
};
