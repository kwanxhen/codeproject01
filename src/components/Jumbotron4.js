import React from "react";
import sectionBackground from "../images/Group 7.svg";

function Jumbotron4() {
  const mainDiv = {
    height: "400px",
    backgroundColor: "#FFFFFF",
  };

  const sectionImg = {
    height: "65%",
    marginTop: "75px",
    marginLeft: "90px",
  };

  const contentDiv = {
    marginTop: "140px",
    marginLeft: "180px",
  };

  const sectionTitle = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: "20px",
    color: "#00427E",
  };

  const sectionBody = {
    ffontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "medium",
    color: "#00427E",
  };

  return (
    <div class="container-fluid" style={mainDiv}>
      <div class="row">
        <div class="col-sm-7">
          <div style={contentDiv}>
            <h1 style={sectionTitle}>Trusted and Secure</h1>
            <h4 style={sectionBody}>
              We empower blockchain technology to make your transactions <br />trusted and secure. 
            </h4>
          </div>
        </div>
        <div class="col-sm-5">
          <img src={sectionBackground} style={sectionImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron4;
