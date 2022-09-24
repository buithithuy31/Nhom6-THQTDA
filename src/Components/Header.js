import React from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export default function Header() {
  return (
    <header>
      <Navbar
        bg="dark"
        expand="lg"
        variant="dark"
        collapseOnSelect
        className="shadow-sm"
        fixed="top"
        style={{ height: "80px" }}
      >
        <Container>
          <Navbar.Brand>
            <Nav.Link>
              Shop Second Hands
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle> </Navbar.Toggle>
            <Navbar.Collapse>
              <Nav>
                <div>
                <Nav.Link>Home</Nav.Link>
                <Nav.Link>Product</Nav.Link>
                <Nav.Link>Contact</Nav.Link>
                </div>

                <div>
                  <Nav.Link>

                  </Nav.Link>

                  <Nav.Link>
                    Login
                  </Nav.Link>
                </div>
              </Nav>
            </Navbar.Collapse>
          
        </Container>
      </Navbar>
    </header>
  );
}
