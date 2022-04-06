import styled from "styled-components";
import { theme } from "../../globalStyle";

export const Input = styled.input`
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
`;
export const Checkmark = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 18px;
  width: 18px;
  background-color: ${theme.color.white.primary};
  border-radius: 4px;
  border: 2px solid #212121; 
  &:after {
    content: "";
    position: absolute;
    display: none;
  }
`;
export const Overlay = styled.div`
  width: 34px;
  height: 34px;
  background-color: ${theme.color.green.light};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -32%);
  z-index: 1;
  border-radius: 50%;
  opacity: 0;
`;
export const Container = styled.label`
  display: inline-block;
  position: relative;
  padding-left: 17px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  &:hover ${Overlay} {
    opacity: 0.5;
  }

  & ${Input}:checked ~ ${Checkmark} {
    background-color: ${theme.color.green.primary};
    border: 0px;
  }
  & ${Input}:checked ~ ${Checkmark}:after {
    display: block;
  }
  & ${Checkmark}:after {
    left: 6px;
    top: 2px;
    width: 7px;
    height: 12px;
    border: solid white;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotate(45deg);
    -ms-transform: rotate(45deg);
    transform: rotate(45deg);
  }
`;
