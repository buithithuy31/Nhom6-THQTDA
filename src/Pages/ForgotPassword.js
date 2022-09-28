import React from "react";
import { Link } from "react-router-dom";
import { Button, Container, Row, Col, Form } from "react-bootstrap";

export const ForgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <Container>
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <h3 className="text-center py-3 heading fw-bold py-3 my-0 pt-5">
            A phone number verification
          </h3>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control placeholder="Enter email" />
            </Form.Group>
            <Row className="py-3 text-center" style={{ fontSize: "14px" }}>
              <Link
                className="text-decoration-none text-primary ms-2p-2 bd-highlight"
                to={"/login"}
              >
                Back to Login
              </Link>
            </Row>
            <div className="d-grid">
              <Button type="submit" className="btn" variant="dark">
                Continue
              </Button>
            </div>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
