import { useState, ChangeEvent, useContext } from "react";
import { http } from "../../services/http";
import { Form, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import AppContext from "../../context/AppContext";
export const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { setUser } = useContext(AppContext);

  const navigate = useNavigate();

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e: any) => {
    e.preventDefault();
    http.post("/api/auth", formData).then((res) => {
      localStorage.setItem("token", res.data.token);
      setUser(res.data.user);
      navigate("/dashboard");
    });
  };

  return (
    <Form onSubmit={onSubmit}>
      <h3 className="text-center mb-3s">Login</h3>
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
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>

      <div>
        Dont you have an account? <Link to="/register">Create one</Link>
      </div>
    </Form>
  );
};
