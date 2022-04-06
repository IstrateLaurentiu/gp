import styled from "styled-components";
import { theme } from "../../globalStyle";
import { Button } from "react-bootstrap";

export const StyledHeading = styled.h1`
  font-family: Cabin;
  font-size: 30px;
  font-weight: 700;
  line-height: 36px;
  letter-spacing: 0em;
  text-align: left;
  padding-bottom: 12px;
  border-bottom: 2px solid ${theme.color.gray.border};
  margin-bottom: 20px;
`;

export const WidgetsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 56px;
`;

export const StyledButton = styled(Button)`
  background-color: ${theme.color.green.primary};
  border: 1px solid ${theme.color.green.primary};
  &:hover, &:active, &:focus {
    background-color: ${theme.color.green.primary};
    border: 1px solid ${theme.color.green.primary};
    outline: none;
    box-shadow: none !important;
  }
`;
