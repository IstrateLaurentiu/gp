import React from "react";
import { TooltipIcon } from "../icons";
import { StyledDescription, StyledTooltipBody, StyledTooltipContainer } from "./TooltipStyles";

type StateProps = {
  description: string;
  linkText: string;
  url: string;
};

export const Tooltip = ({ description, linkText, url }: StateProps) => {
  return (
    <StyledTooltipContainer>
      <TooltipIcon />
      <StyledTooltipBody>
        <StyledDescription>{description}</StyledDescription>
        <a href={url} target="_blank" rel="noreferrer">
          {linkText}
        </a>
      </StyledTooltipBody>
    </StyledTooltipContainer>
  );
};
