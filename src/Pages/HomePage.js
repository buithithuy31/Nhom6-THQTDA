import React from "react";
import { Container, Form, Nav, Navbar, NavLink } from "react-bootstrap";
import Product from "../Components/Product";

import '../App.css'
export default function HomePage() {
  return (
    // <Container>
    //   {/* <Product/> */}
    //   <h3 className="text-center"> WELCOME</h3>
    //   <Form>
    //     <div>
    //       <Navbar.Brand className="text-center">
    //         <button type="button" className="btn btn-outline-success ">
    //           Product
    //         </button>
    //       </Navbar.Brand>
    //     </div>
    //   </Form>
    // </Container>
    <Container>
      <div className=" items-center justify-center">
        <h1 className="text-center ">Wear better, look better.</h1>
        <p className="text-center">Don't you just love being in apparel?</p>
        <Nav.Link className="text-center" as={NavLink} href="/product">
          <button className="btn btn-outline-success">Shop Now</button>
        </Nav.Link>
      </div>
    </Container>
  );
}
