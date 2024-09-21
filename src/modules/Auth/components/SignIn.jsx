import React from "react";
import { loginRightSection } from "assets";
import { Form, Col, Button } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { onChangeUserCredentials } from "reduxConfig";

export const SignIn = () => {
  const dispatch = useDispatch();
  const { emailOrUsername, password } = useSelector((state) => state?.user);

  const [validated, setValidated] = React.useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const onChange = (e) => {
    const { value, name } = e?.target;

    dispatch(onChangeUserCredentials({ name, value }));
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
        className="w-100"
      >
        <div className="row">
          <Col
            sm={12}
            md={6}
            className="d-flex flex-column justify-content-center"
          >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label className="small">Username or email</Form.Label>
              <Form.Control
                type="text"
                value={emailOrUsername}
                placeholder="Usernname or email"
                required
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Usernname or email is required
              </Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlPassword"
            >
              <Form.Label className="small">Password</Form.Label>
              <Form.Control
                required
                minLength={8}
                name="password"
                type="password"
                value={password}
                placeholder="Password"
                pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
                onChange={onChange}
              />
              <Form.Control.Feedback type="invalid">
                Password must be at least 8 characters long, contain at least
                one uppercase letter, one number, and one symbol.
              </Form.Control.Feedback>
            </Form.Group>
            <Button type="submit" className="w-100">
              Sign In
            </Button>
          </Col>
          <Col sm={12} md={6} className="d-none d-md-block">
            <img src={loginRightSection} alt="image" />
          </Col>
        </div>
      </Form>
    </div>
  );
};
