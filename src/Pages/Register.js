import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";
import Forms from "../redux/Form";

export const Register = () => {
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [validate, setValidate] = useState({});
  const [flag, setFlag] = useState(false);

  const validateRegister = () => {
    let isValid = true;

    let validator = Forms.validator({
      fullname: {
        value: fullname,
        isRequired: true,
      },
      phone: {
        value: phone,
        isRequired: true,
        minLength: 10,
      },
      email: {
        value: email,
        isRequired: true,
        isEmail: true,
      },
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

    if (!fullname || !phone || !email || !username || !password) {
      setFlag(true);
    } else {
      setFlag(false);
    }
    const validate = validateRegister();

    if (validate) {
      setValidate({});
      setFullname("");
      setPhone("");
      setEmail("");
      setUsername("");
      setPassword("");
    }
  };
  return (
    <Container onSubmit={handleSubmit} component="main" maxWidth="xs">
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <p className="text-center py-3 heading fw-bold py-3 my-0 pt-5">
            Register
          </p>
          <Form
            onSubmit={handleSubmit}
            component="forms"
            autoComplete={"off"}
            noValidate
            sx={{ mt: 1 }}
          >
            <Form.Group className="mb-3">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                margin="normal"
                className={`form-control ${
                  validate.validate && validate.validate.fullname
                    ? "is-invalid "
                    : ""
                }`}
                required
                id="fullname"
                value={fullname}
                placeholder="Full name"
                onChange={(e) => setFullname(e.target.value)}
              />
              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.fullname
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.fullname
                  ? validate.validate.fullname[0]
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Phone</Form.Label>
              <Form.Control
                margin="normal"
                className={`form-control ${
                  validate.validate && validate.validate.phone
                    ? "is-invalid "
                    : ""
                }`}
                required
                id="phone"
                value={phone}
                placeholder="Phone"
                onChange={(e) => setPhone(e.target.value)}
              />
              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.phone
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.phone
                  ? validate.validate.phone[0]
                  : ""}
              </div>
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control
                margin="normal"
                className={`form-control ${
                  validate.validate && validate.validate.email
                    ? "is-invalid "
                    : ""
                }`}
                required
                id="Email"
                value={email}
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div
                className={`invalid-feedback text-start ${
                  validate.validate && validate.validate.email
                    ? "d-block"
                    : "d-none"
                }`}
              >
                {validate.validate && validate.validate.email
                  ? validate.validate.email[0]
                  : ""}
              </div>
            </Form.Group>
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
              <Button type="submit" className="btn" variant="dark">
                Register
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
      <Row className="py-3 text-center" style={{ fontSize: "14px" }}>
        <Col>
          
          <Link
            className="text-decoration-none text-primary ms-2 fw-bold"
            to={"/login"}
          >
            Login
          </Link>
        </Col>
      </Row>
      {flag && (
        <div className="alert alert-danger" role="alert">
          This is a danger alert—check it out!
        </div>
      )}
    </Container>
  );
};
