import styled from "styled-components";
import { theme } from "../../globalStyle";

export const StyledSlider = styled.div`
  position: absolute;
  cursor: pointer;
  border-radius: 30px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0.884669303894043px 5.897795677185059px 0px #00000026 inset;
  border: 0.59px solid ${theme.color.green.light};
  -webkit-transition: background-color 0.4s;
  transition: background-color 0.4s;
  &:before {
    position: absolute;
    border-radius: 50%;
    border: 0.59px solid ${theme.color.beige.primary};
    box-shadow: 0px 0px 1.1795591115951538px 0px #00000059;
    content: "";
    height: 19px;
    width: 20px;
    background-color: white;
    -webkit-transition: background-color 0.4s, transform 0.4s;
    transition: background-color 0.4s, transform 0.4s;
  }

  &:hover:before {
    outline: 4px solid rgba(175, 198, 189, 0.5);
    opacity: 0.5;
  }
`;

export const Input = styled.input`
  opacity: 0;
  width: 0;
  height: 0;
  &:checked + ${StyledSlider} {
    background-color: ${theme.color.green.primary};
  }

  &:focus + ${StyledSlider} {
    box-shadow: 0 0 1px ${theme.color.green.primary};
  }
  &:checked + ${StyledSlider}:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 40px;
  height: 20px;
`;
