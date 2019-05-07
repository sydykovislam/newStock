import React from "react";
// import What from './What/What';
import "./Navbar.css";
import {
  UncontrolledCollapse,
  NavbarBrand,
  Navbar,
  NavItem,
  NavLink,
  Nav,
  Container
} from "reactstrap";
import { Link } from "react-router-dom";

function Navbarr(props) {
  return (
    <div className="Navbar">
      <>
        <Navbar className="bg-info Nav" expand="lg">
          <Container>
            <NavbarBrand href="#pablo" onClick={e => e.preventDefault()}>
              Yssyk-Kul life
            </NavbarBrand>
            <button className="navbar-toggler" id="navbarNav" type="button">
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
              <span className="navbar-toggler-bar navbar-kebab" />
            </button>
            <UncontrolledCollapse navbar toggler="#navbarNav">
              <Nav navbar>
                <NavItem className="active">
                  <Link to="/">Home</Link>{" "}
                  <span className="sr-only">(current)</span>
                </NavItem>
                <NavItem>
                  <Link to="/articles">Articles</Link>
                </NavItem>
                <NavItem>
                  <Link to="/ps-gallery">Photo Gallery</Link>
                </NavItem>
              </Nav>
            </UncontrolledCollapse>
          </Container>
        </Navbar>
      </>
    </div>
  );
}

export default Navbarr;
