import Link from "next/link";
import { Container, Nav, NavLink } from "react-bootstrap";
import styled from "styled-components";

import { UserIcon } from "../assets/icons";

const RequestLogin = ({ type }) => {
  return (
    <Container>
      <div className="round">
        <UserIcon />
      </div>
      <h2 className="text-center">Please Sign In</h2>
      <p className="text-center">Sign In to view items in your {type}</p>
      <Nav.Link className="text-center" href="/login">
          <button className="btn btn-outline-success">Login</button>
        </Nav.Link>
    </Container>
  );
};

export default RequestLogin;
