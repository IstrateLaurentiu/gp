import { useState, ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { Color, ProductType } from "../../../types/Models";
import { Error } from "../../../components/Error/Error";
import { ColorPicker } from "../../../components/colorPicker/ColorPicker";
import { Checkbox } from "../../../components/checkbox/Checkbox";
import { StyledButton } from "../DashboardStyles";

type StateProps = {
  onSubmit: (e: any) => void;
};

export const WidgetForm = ({ onSubmit }: StateProps) => {
  const [formData, setFormData] = useState({
    type: ProductType.CARBON,
    amount: 0,
    color: "",
    isPublic: false,
  });
  const [errors, setErrors] = useState([]);

  

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setErrors([]);
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e: any) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center mb-3s">Add new widget</h3>
      <Form.Group className="mb-3">
        <Form.Label>Select product type</Form.Label>
        <Form.Select
          className="mb-3"
          value={formData.type}
          onChange={(e) =>
            setFormData({ ...formData, type: e.target.value as ProductType })
          }
          aria-label="Default select example"
        >
          {Object.values(ProductType).map((product) => (
            <option key={product} value={product}>
              {product}
            </option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Amount</Form.Label>
        <Form.Control
          value={formData.amount}
          onChange={onChange}
          type="number"
          name="amount"
        />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Select Badge Color</Form.Label>
        <p>Badge colour</p>
        <div>
          {Object.values(Color).map((color) => {
            return (
              <ColorPicker
                key={color}
                selected={color === formData.color}
                color={color}
                onClick={() => {
                  setFormData({ ...formData, color });
                }}
              />
            );
          })}
        </div>
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label>Make widget public</Form.Label>
        <br />
        <Checkbox
          checked={formData.isPublic}
          onChange={() =>
            setFormData({ ...formData, isPublic: !formData.isPublic })
          }
        />
      </Form.Group>

      <StyledButton type="submit" className="mb-3">
        Submit
      </StyledButton>

      {errors?.length > 0 && <Error errors={errors}></Error>}
    </Form>
  );
};
