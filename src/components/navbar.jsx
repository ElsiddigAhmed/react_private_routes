import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Button } from "react-bootstrap";
import { logout } from "../helpers";
export default () => {
  const authenticated = JSON.parse(localStorage.authenticated || "false");

  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="#home">Private Routes </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">
            <Button variant="outline-none">Home</Button>{" "}
          </Link>
          <Link to="/reports">
            <Button variant="outline-none">Reports</Button>{" "}
          </Link>
        </Nav>
        <>
          {authenticated ? (
            <Link to="logout" onClick={logout}>
              <Button variant="outline-none">Logout</Button>{" "}
            </Link>
          ) : (
            <Link to="/home">
              <Button as="input" type="submit" value="Login" />{" "}
            </Link>
          )}
        </>
      </Navbar.Collapse>
    </Navbar>
  );
};
