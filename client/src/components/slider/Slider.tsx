import React from "react";
import { Input, StyledSlider, Switch } from "./SliderStyles";

type StateProps = {
  onClick: () => void;
  checked?: boolean;
};
export const Slider = ({ onClick, checked = false }: StateProps) => {
  return (
    <Switch>
      <Input type={'checkbox'} />
      <StyledSlider />
    </Switch>
  );
};
