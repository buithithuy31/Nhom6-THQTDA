import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import { useState } from "react";

import Forms from "../redux/Form";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});

  const [flag, setFlag] = useState(false);
  const validateLogin = () => {
    let isValid = true;

    let validator = Forms.validator({
      username: {
        value: username,
        isRequired: true,
        minLength: 4,
      },
      password: {
        value: password,
        isRequired: true,
        minLength: 6,
      },
    });

    if (validator !== null) {
      setValidate({
        validate: validator.errors,
      });

      isValid = false;
    }
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    const validate = validateLogin();

    if (validate) {
      setValidate({});
      setUsername("");
      setPassword("");
    }
  };

  return (
    <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h3 className="text-center py-3 heading fw-bold py-3 my-0 pt-5">
            Login
          </h3>
          <Form
            onSubmit={handleSubmit}
            component="form"
            autoComplete={"off"}
            noValidate
            sx={{ mt: 1 }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Username</Form.Label>
              <Form.Control
                margin="normal"
                className={`form-control ${
                  validate.validate && validate.validate.username
                    ? "is-invalid "
                    : ""
                }`}
                required
                id="username"
                value={username}
                placeholder="User name"
                onChange={(e) => setUsername(e.target.value)}
              />
              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.username
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.username
                  ? validate.validate.username[0]
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                margin="normal"
                className={`form-control ${
                  validate.validate && validate.validate.password
                    ? "is-invalid "
                    : ""
                }`}
                required
                id="password"
                value={password}
                placeholder="Enter Password"
                onChange={(e) => setPassword(e.target.value)}
              />
              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.password
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.password
                  ? validate.validate.password[0]
                  : ""}
              </div>
            </Form.Group>
            <div className="d-grid">
            <Link className="text" to={"/forgot"}>Forgot Password?</Link>
              <Button type="submit" class="btn btn-primary" variant="dark">
                Login
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="py-3 text-center" style={{ fontSize: "14px" }}>
        <Col>
          
          Don't have an account?
          <Link
            className="text-decoration-none text-primary ms-2 fw-bold"
            to={"/register"}
          >
            Register
          </Link>
        </Col>
      </Row>
      {flag && (
        <div class="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      )}
    </Container>
  );
};
