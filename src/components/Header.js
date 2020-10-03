import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import InputGroup from "react-bootstrap/InputGroup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function Header() {
  //Header styling
  const navbarStyle = {
    color: "black",
    backgroundColor: "#596FD5",
    height: "100px",
    fontFamily: "'Roboto', sans-serif",
    fontWeight: "700",
  };

  const brandStyle = {
    color: "white",
    fontSize: "36px",
    marginLeft: "5%",
  };

  const btnDiv = {
    marginRight: "5%",
  };

  const btnSignUp = {
    color: "white",
    backgroundColor: "inherit",
    border: "none",
    marginRight: "10px",
  };

  const inputGroup = {
    width: "55%",
    marginLeft: "7%",
  };

  return (
    <Navbar style={navbarStyle}>
      <Navbar.Brand style={brandStyle} href="#home">
        EquityEx
      </Navbar.Brand>
      <InputGroup style={inputGroup}>
        <Form.Control
          placeholder="Search for Companies, Ticker Symbol or Smart Contracts"
          width=""
        />
        <InputGroup.Append>
          <Button variant="light">
            <FontAwesomeIcon icon={faSearch} />
          </Button>
        </InputGroup.Append>
      </InputGroup>

      <div style={btnDiv} className="ml-auto">
        <Button style={btnSignUp} size="lg">
          Sign Up
        </Button>
        <Button variant="light" size="lg">
          Login
        </Button>
      </div>
    </Navbar>
  );
}

export default Header;
