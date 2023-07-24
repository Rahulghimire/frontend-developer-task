import React from "react";
import "../index.css";
import logo from "../assets/logo.svg";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import cart from "../assets/cart.svg";
import search from "../assets/search.svg";
import favourites from "../assets/favourites.svg";

const Navigation = () => {
  return (
    <Navbar expand="lg" className="navbar d-flex align-items-center">
      <Container>
        <Navbar.Brand href="/" className="navbar_logo">
          <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-center">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link href="/home" className="nav-item">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="nav-item">
              About
            </Nav.Link>
            <Nav.Link href="/services" className="nav-item">
              Services
            </Nav.Link>
            <Nav.Link href="/breeds" className="nav-item">
              Breeds
            </Nav.Link>
            <Nav.Link href="/shop" className="nav-item">
              Shop
            </Nav.Link>
            <Nav.Link href="/gallery" className="nav-item">
              Gallery
            </Nav.Link>
          </Nav>
          <form className="search-form gap-4">
            <div className="position-relative search">
              <input
                type="search"
                placeholder="Search....."
                className="me-2 rounded-pill search-input p-4"
                aria-label="Search"
              />
            </div>

            <div className="fav-logo">
              <img src={favourites} alt="favourites-logo" />
            </div>
            <Nav.Link href="#" className="mx-3 align-items-center d-flex">
              <div className="d-flex flex-row align-items-center justify-content-center cart">
                <img src={cart} alt="cart" />
                <div className="cart-item ps-3">2 item</div>
              </div>
            </Nav.Link>
          </form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navigation;
