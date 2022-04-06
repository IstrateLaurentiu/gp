import styled from "styled-components";
import { theme } from "../../../globalStyle";

export const StyledWidgetContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 220px;
`;
export const StyledWidgetHeader = styled.div`
  display: flex;
  background-color: ${(props) => `${props.color}`};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.01);
  border-radius: 6px;
  padding: 12px;
  margin-bottom: 14px;
`;

export const StyledLogoText = styled.span`
  color: ${(props) => `${props.color}`};
  font-size: 9px;
`;
export const StyledLogoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 12px;
  & svg {
    margin-bottom: 4px;
  }
`;

export const StyledTitleContainer = styled.div`
  padding-top: 2px;
  & p {
    color: ${(props) => `${props.color}`};
  }
`;

export const StyledTitleType = styled.p`
  font-family: Cabin;
  font-size: 12px;
  font-weight: 400;
  line-height: 15px;
  text-align: left;
  margin-bottom: 4px;
`;

export const StyledTitleAmount = styled.p`
  font-family: Cabin;
  font-size: 18px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: 0em;
  text-align: left;
  margin-bottom: 0;
`;

export const StyledRow = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;

  & p {
    color: ${theme.color.green.primary};
    font-family: Cabin;
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: center;
    margin-bottom: 0;

    & svg {
      transform: translateY(-6px);
    }
  }
`;
