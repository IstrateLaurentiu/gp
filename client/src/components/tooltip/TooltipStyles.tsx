import styled from "styled-components";
import { theme } from "../../globalStyle";

export const StyledTooltipBody = styled.div`
  & p {
    color: ${theme.color.black};
    margin-bottom: 14px;
  }
`;

export const StyledDescription = styled.div`
  color: ${theme.color.black};
  margin-bottom: 14px;
`;

export const StyledTooltipContainer = styled.div`
  position: relative;
  display: inline-block;
  cursor: pointer;

  & ${StyledTooltipBody} {
    visibility: hidden;
    width: 240px;
    background-color: ${theme.color.white.primary};
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    text-align: center;
    border-radius: 6px;
    padding: 12px;
    position: absolute;
    z-index: 1;
    top: 16px;
    left: 0;
    opacity: 0;
    transition: opacity 0.4s;
  }

  & a {
    text-decoration: none;
    color: ${theme.color.green.primary};
  }

  &:hover ${StyledTooltipBody} {
    visibility: visible;
    opacity: 1;
  }
`;
