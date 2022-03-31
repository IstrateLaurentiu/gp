import React, { useState, ChangeEvent, useContext } from "react";
import { http } from "../../services/http";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
export const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const { setUser } = useContext(AppContext);
  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();

    http
      .post("/api/user", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        setUser(res.data.user);
        navigate("/dashboard");
      });
  };

  return (
    <Form onSubmit={onSubmit}>
      <h3 className="text-center mb-3s">Create a new account</h3>
      <Form.Group className="mb-3">
        <Form.Label>Name</Form.Label>
        <Form.Control
          value={formData.name}
          onChange={onChange}
          type="text"
          name="name"
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Email</Form.Label>
        <Form.Control
          value={formData.email}
          onChange={onChange}
          type="email"
          name="email"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={formData.password}
          onChange={onChange}
          type="password"
          name="password"
          min={6}
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          value={formData.confirmPassword}
          onChange={onChange}
          type="password"
          name="confirmPassword"
          min={6}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <div>
        Already have an account? <Link to="/register">Login</Link>
      </div>
    </Form>
  );
};
