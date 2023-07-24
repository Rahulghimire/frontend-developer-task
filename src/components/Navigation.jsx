import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import cart from "../assets/cart.svg";
import { NavLink } from "react-router-dom";
import favourites from "../assets/favourites.svg";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar d-flex align-items-center mb-xl-8">
      <Container>
        <Navbar.Brand href="/" className="navbar_logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav
            className="mx-3 mx-md-0 py-3 py-md-0 me-auto my-2 my-lg-0"
            navbarScroll
          >
            <NavLink exact to="/" className="nav-item" activeClassName="active">
              Home
            </NavLink>
            <NavLink to="/about" className="nav-item" activeClassName="active">
              About
            </NavLink>
            <NavLink
              to="/services"
              className="nav-item"
              activeClassName="active"
            >
              Services
            </NavLink>
            <NavLink to="/breeds" className="nav-item" activeClassName="active">
              Breeds
            </NavLink>
            <NavLink to="/shop" className="nav-item" activeClassName="active">
              Shop
            </NavLink>
            <NavLink
              to="/gallery"
              className="nav-item"
              activeClassName="active"
            >
              Gallery
            </NavLink>
          </Nav>
          <form className="search-form gap-1 gap-md-4  navbarScroll">
            <div className="position-relative search">
              <input
                type="search"
                placeholder="Search....."
                className="me-2 rounded-pill search-input p-4"
                aria-label="Search"
              />
            </div>
            <div className="fav-logo me-md-3">
              <img src={favourites} alt="favourites-logo" />
            </div>
            <Nav.Link
              href="#"
              className="mx-2 mx-md-3 align-items-center d-flex"
            >
              <div className="d-flex flex-row align-items-center justify-content-center cart">
                <img src={cart} alt="cart" />
                <div className="cart-item ps-1 ps-md-3">2</div>
                <div className="cart-item ps-1 ps-md-1">item</div>
              </div>
            </Nav.Link>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
