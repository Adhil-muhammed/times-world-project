import React from "react";
import { useHandleUserData } from "..";
import { loginRightSection } from "assets";
import { Form, Col, Button, FloatingLabel } from "react-bootstrap";
import { FaGoogle, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";

export const SignIn = () => {
  const { validated, userCredential, handleSubmit, onChange } =
    useHandleUserData();

  const { emailOrUsername, password } = userCredential;

  return (
    <div>
      <div
        className="d-flex justify-content-center align-items-center p-5"
        style={{ height: "100vh" }}
      >
        <Form
          noValidate
          className="w-100"
          validated={validated}
          onSubmit={handleSubmit}
        >
          <div className="row">
            <Col
              xm={12}
              md={6}
              className="d-flex flex-column justify-content-center"
            >
              <FloatingLabel className="text-start mb-3 fs-4 fw-bold">
                Sign In
              </FloatingLabel>
              <div className="mb-3">
                <span>
                  <strong style={{ fontSize: "14px" }} className="me-1">
                    new user?
                  </strong>
                  <a
                    href="#"
                    className="text-decoration-underline"
                    style={{ fontSize: "14px" }}
                  >
                    create an account
                  </a>
                </span>
              </div>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label className="small">Username or email</Form.Label>
                <Form.Control
                  type="text"
                  name="emailOrUsername"
                  value={emailOrUsername}
                  placeholder="Usernname or email"
                  required
                  className="no-validation-border"
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
                  className="no-validation-border"
                  pattern="^(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$"
                  onChange={onChange}
                />
                <Form.Control.Feedback type="invalid">
                  Password must be at least 8 characters long, contain at least
                  one uppercase letter, one number, and one symbol.
                </Form.Control.Feedback>
              </Form.Group>
              <Form.Group>
                <Form.Check
                  required
                  className="mb-3"
                  type="checkbox"
                  id="custom-checkbox"
                  label={
                    <span
                      style={{ fontSize: "14px" }}
                      className="no-validation-font-color"
                    >
                      Keep me signed in
                    </span>
                  }
                />
              </Form.Group>
              <Button type="submit">Sign In</Button>
              <div className="line-with-label my-4">
                <span>or sign in with</span>
              </div>
              <div className="d-flex align-items-center justify-content-center">
                <div className="social-icon">
                  <FaGoogle />
                </div>
                <div className="social-icon">
                  <FaFacebook />
                </div>
                <div className="social-icon">
                  <FaLinkedin />
                </div>
                <div className="social-icon">
                  <FaTwitter />
                </div>
              </div>
            </Col>
            <Col xm={12} md={6} className="d-none d-md-block">
              <img src={loginRightSection} alt="image" />
            </Col>
          </div>
        </Form>
      </div>
    </div>
  );
};
