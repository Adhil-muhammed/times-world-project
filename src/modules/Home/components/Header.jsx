import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";

export const Header = () => {
  const [activeLink, setActiveLink] = React.useState("All");

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
  };

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold fs-5">Countries</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ms-auto fs-6"
            activeKey={activeLink}
            onSelect={handleSelect}
          >
            <Nav.Link
              eventKey="All"
              className={activeLink === "All" ? "active-link" : ""}
            >
              All
            </Nav.Link>
            <Nav.Link
              eventKey="Asia"
              className={activeLink === "Asia" ? "active-link" : ""}
            >
              Asia
            </Nav.Link>
            <Nav.Link
              eventKey="Europe"
              className={activeLink === "Europe" ? "active-link" : ""}
            >
              Europe
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
