import React from "react";
import { useDispatch } from "react-redux";
import { Navbar, Nav } from "react-bootstrap";
import { showMore, setFilterKey } from "reduxConfig";

export const Header = () => {
  const dispatch = useDispatch();
  const [activeLink, setActiveLink] = React.useState("");

  const handleSelect = (selectedKey) => {
    setActiveLink(selectedKey);
    dispatch(setFilterKey({ filterKey: selectedKey }));
  };

  return (
    <Navbar
      expand="lg"
      sticky="top"
      className="p-2"
      style={{ background: "white" }}
    >
      <Navbar.Brand className="fw-bold fs-5">Countries</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav
          className="ms-auto fs-6"
          activeKey={activeLink}
          onSelect={handleSelect}
        >
          <Nav.Link
            eventKey=""
            className={activeLink === "" ? "active-link" : ""}
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
        <button>Show More</button>
      </Navbar.Collapse>
    </Navbar>
  );
};
