import styled from "styled-components";

export const Container = styled.span`
  display: inline-block;
  width: 16px;
  height: 16px;
  box-shadow: 0px 4px 4px 0px #00000003;
  margin-right: 2px;
  cursor: pointer;
  background-color: ${(props) => `${props.color}`};

  &:hover {
    opacity: 0.8;
  }
  &.selected {
    border: 1.5px solid #b0b0b0;
  }
`;
