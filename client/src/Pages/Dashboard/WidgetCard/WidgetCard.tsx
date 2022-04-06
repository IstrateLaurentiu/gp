import React, { useState } from "react";
import { Checkbox } from "../../../components/checkbox/Checkbox";
import { ColorPicker } from "../../../components/colorPicker/ColorPicker";
import { Error } from "../../../components/Error/Error";
import { Logo } from "../../../components/icons";
import { Slider } from "../../../components/slider/Slider";
import { Tooltip } from "../../../components/tooltip/Tooltip";
import { http } from "../../../services/http";
import { Color, Post } from "../../../types/Models";
import {
  amountTextMapper,
  colorMapper,
  productTextMapper,
} from "../../../utils/colorMappers";
import { axiosErrorHandler } from "../../../utils/errorHandler";
import { StyledButton } from "../DashboardStyles";
import {
  StyledLogoContainer,
  StyledLogoText,
  StyledRow,
  StyledTitleAmount,
  StyledTitleContainer,
  StyledTitleType,
  StyledWidgetContainer,
  StyledWidgetHeader,
} from "./WidgetCardStyles";

type StateProps = {
  widget: Post;
  onDelete: (e: any) => void;
};

export const WidgetCard = ({ widget, onDelete }: StateProps) => {
  const [currentWidget, setCurrentWidget] = useState(widget);
  const [errors, setErrors] = useState([]);
  const updateWidget = (newWidget: Post) => {
    http
      .put(`/api/posts/${widget._id}`, {
        ...newWidget,
      })
      .then((res) => {
        setErrors([]);
        setCurrentWidget({ ...currentWidget, ...res.data });
      })
      .catch(
        axiosErrorHandler<any>((res) => {
          if (res.type === "axios-error") {
            setErrors(res.error.response?.data.errors);
          }
        })
      );
  };

  const deleteWidget = () => {
    http
      .delete(`/api/posts/${widget._id}`)
      .then((res) => {
        onDelete(widget);
      })
      .catch(
        axiosErrorHandler<any>((res) => {
          if (res.type === "axios-error") {
            setErrors(res.error.response?.data.errors);
          }
        })
      );
  };
  return (
    <StyledWidgetContainer>
      <StyledWidgetHeader color={currentWidget.color}>
        <StyledLogoContainer>
          <Logo fillColor={colorMapper.get(currentWidget.color)!} />
          <StyledLogoText color={colorMapper.get(currentWidget.color)!}>
            greenspark
          </StyledLogoText>
        </StyledLogoContainer>
        <StyledTitleContainer color={colorMapper.get(currentWidget.color)!}>
          <StyledTitleType>
            This product {productTextMapper.get(widget.type)}
          </StyledTitleType>
          <StyledTitleAmount>
            {widget.amount} {amountTextMapper.get(widget.type)}
          </StyledTitleAmount>
        </StyledTitleContainer>
      </StyledWidgetHeader>
      <StyledRow>
        <p>
          Link to public profile
          <Tooltip
            description="This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it."
            linkText="View public profile"
            url="https://google.com"
          />
        </p>
        <Checkbox
          checked={currentWidget.isPublic}
          onChange={() =>
            updateWidget({
              ...currentWidget,
              isPublic: !currentWidget.isPublic,
            })
          }
        />
      </StyledRow>
      <StyledRow>
        <p>Badge colour</p>
        <div>
          {Object.values(Color).map((color) => {
            return (
              <ColorPicker
                key={color}
                selected={color === currentWidget.color}
                color={color}
                onClick={() => {
                  updateWidget({
                    ...currentWidget,
                    color,
                  });
                }}
              />
            );
          })}
        </div>
      </StyledRow>
      <StyledRow>
        <p>Activate badge </p>
        <Slider
          onClick={() => {
            console.log("it works");
          }}
        />
      </StyledRow>
      <StyledRow>
        <StyledButton onClick={deleteWidget}>Delete Widget</StyledButton>
      </StyledRow>
      {errors?.length > 0 && <Error errors={errors}></Error>}
    </StyledWidgetContainer>
  );
};
