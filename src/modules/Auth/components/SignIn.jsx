import React from "react";
import { Form, Col, Button } from "react-bootstrap";

export const SignIn = () => {
  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center p-5"
      style={{ height: "100vh" }}
    >
      <Form
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
        style={{ width: "100%" }}
      >
        <div className="row">
          <Col sm={12} md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
                minLength={8}
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 8 characters long, contain at least
                one uppercase letter, one number, and one symbol.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
          <Col sm={12} md={6} className="d-none d-md-block">
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="name@example.com"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please provide a valid email address.
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                required
                minLength={8}
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 8 characters long, contain at least
                one uppercase letter, one number, and one symbol.
              </Form.Control.Feedback>
            </Form.Group>
          </Col>
        </div>
        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
};
