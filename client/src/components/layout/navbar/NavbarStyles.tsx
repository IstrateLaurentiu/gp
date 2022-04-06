import styled from "styled-components";
import { theme } from "../../../globalStyle";

export const StyledFlexContainer = styled.div`
  display: flex;

  & a {
    padding: 0 16px;
  }
`;
export const StyledNav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px 0;
  background-color: ${theme.color.beige.primary};
  & a {
    font-size: 24px;
    font-weight: bold;
    text-decoration: none;
    color: ${theme.color.green.primary};
  }
`;
