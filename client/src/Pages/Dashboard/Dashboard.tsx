import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Error } from "../../components/Error/Error";
import { http } from "../../services/http";
import { Post } from "../../types/Models";
import { axiosErrorHandler } from "../../utils/errorHandler";
import {
  StyledButton,
  StyledHeading,
  WidgetsContainer,
} from "./DashboardStyles";
import { WidgetCard } from "./WidgetCard/WidgetCard";
import { WidgetForm } from "./WidgetForm/WidgetForm";

export const Dashboard = () => {
  const [widgets, setWidgets] = useState<Post[]>([]);
  const [errors, setErrors] = useState([]);
  const [displayForm, setDisplayForm] = useState(false);

  useEffect(() => {
    http.get("/api/posts/me").then((res) => {
      setWidgets(res.data);
    });
  }, []);

  const handleWidgetSubmission = (widget: Post) => {
    http
      .post("/api/posts", widget)
      .then((res) => {
        setWidgets([...widgets, res.data]);
        setErrors([]);
        setDisplayForm(false);
      })
      .catch(
        axiosErrorHandler<any>((res) => {
          if (res.type === "axios-error") {
            setErrors(res.error.response?.data.errors);
          }
        })
      );
  };

  const handleWidgetDeletion = (widgetToDelete: Post) => {
    setWidgets([
      ...widgets.filter((widget) => widget._id !== widgetToDelete._id),
    ]);
  };

  return (
    <>
      <Row className="pt-4">
        <Col>
          <StyledButton
            onClick={() => {
              setDisplayForm(!displayForm);
              setErrors([]);
            }}
          >
            Add new widget
          </StyledButton>
          {displayForm && (
            <>
              <WidgetForm onSubmit={handleWidgetSubmission} />
              {errors?.length > 0 && <Error errors={errors}></Error>}
            </>
          )}
        </Col>
      </Row>
      <Row className="pt-4">
        <Col>
          <StyledHeading>Per product widgets:</StyledHeading>
          <WidgetsContainer>
            {widgets?.length > 0
              ? widgets.map((widget) => (
                  <WidgetCard
                    key={widget._id}
                    widget={widget}
                    onDelete={handleWidgetDeletion}
                  />
                ))
              : "Oh, no, no widgets"}
          </WidgetsContainer>
        </Col>
      </Row>
    </>
  );
};
