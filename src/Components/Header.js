import React from "react";
import { useSelector } from "react-redux";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
// import { FaOpencart, FaRegUser } from "react-icons/fa";
import {CartIcon, LogoIcon, UserIcon} from '../assets/icons'

export default function Header() {
  return (
    <header>
      <Navbar
        bg="secondary"
        expand="lg"
        variant="dark"
        collapseOnSelect
        className="shadow-sm"
        fixed="top"
        style={{ height: "80px" }}
      >
        <Container>
          <Navbar.Brand className="fw-bold">
            <Nav.Link as={NavLink} to="/">
            <LogoIcon/>
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Brand className="fw-bold">
            <Nav.Link className="text-light" as={NavLink} to="/">
              Shop Second Hands
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"> </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="d-flex w-100">
              <div className="flex-grow-1 d-flex justify-content-center">
                <Nav.Link as={NavLink} to="/">
                  Home
                </Nav.Link>
                <Nav.Link as={NavLink} to="/product">
                  Product
                </Nav.Link>
                <Nav.Link as={NavLink} to="/contact">
                  Contact
                </Nav.Link>
              </div>
              <Navbar.Brand>
              <div>
                <form class="d-flex" role="search">
                  <input
                    class="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  ></input>
                  <button
                    id="search-button"
                    type="button"
                    className="btn btn-primary"
                  >
                    <i class="fa fa-search"></i>
                  </button>
                  {/* <button class="btn btn-outline-success" type="submit">
                    Search
                  </button> */}
                </form>
              </div>
              </Navbar.Brand>
              <div className="d-flex">
                  <Nav.Link className="text-light" as={NavLink} to="/cart">
                    {/* <FaOpencart /> */}
                    <CartIcon/>
                  </Nav.Link>

                <Nav.Link as={NavLink} to="/login">
                  <div className="text-md">
                    <UserIcon />
                  </div>
                </Nav.Link>

                {false && (
                  <NavDropdown title="minh" id="username">
                    <NavDropdown.Item to="/profile">Profile</NavDropdown.Item>

                    <NavDropdown.Item
                      onClick={() => console.log("logoutHandler")}
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                )}
              </div>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}
