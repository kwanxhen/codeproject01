import React from "react";
import logoSVG from "../images/link 1.svg";

function Navbar() {
  const nav = {
    backgroundColor: "#00427E",
    fontFamily: "Roboto",
    fontStyle: "normal",
    paddingLeft: "130px",
    paddingRight: "130px",
  };

  const logo = {
    marginRight: "8px",
    marginBottom: "7px",
  }

  const brand = {
    fontSize: "34px",
    fontWeight: "bold",
  };

  const searchForm = {
    marginLeft: "120px",
    width: "650px",
  };

  const signupBtn = {
    backgroundColor: "inherit",
    color: "white",
    fontWeight: "bold",
  };

  const loginBtn = {
    backgroundColor: "#C4D7FF",
    color: "black",
    fontWeight: "bold",
  };

  return (
    <nav class="navbar navbar-expand-xl navbar-dark" style={nav}>
      
      <a class="navbar-brand" href="#" style={brand}>
        <img src={logoSVG} style={logo}></img>
        EquityEx
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="mr-auto" action="">
          <div style={searchForm} class="input-group">
            <input
              type="search"
              class="form-control"
              placeholder="Search for Companies, Ticker Symbol or Smart Contracts"
              aria-label="Homepage search bar"
            />
            <div class="input-group-append">
              <button type="submit" class="btn btn-primary">
                <i class="fa fa-search"></i>
              </button>
            </div>
          </div>
        </form>

        {/* Login and sign up buttons */}
        <button type="button" class="btn" style={signupBtn}>
          Sign Up
        </button>
        <button type="button" class="btn" style={loginBtn}>
          Login
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
