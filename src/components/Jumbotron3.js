import React from "react";
import sectionBackground from "../images/Group 3.svg";

function Jumbotron3() {
  const mainDiv = {
    height: "400px",
    backgroundColor: "#00427E",
    position: "relative",
    zIndex: "30",
  };

  const sectionImg = {
    height: "65%",
    marginTop: "75px",
    marginLeft: "270px",
  };

  const contentDiv = {
    marginTop: "140px",
  };

  const sectionTitle = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#FFFFFF",
  };

  const sectionBody = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "medium",
    color: "#FFFFFF",
  };

  return (
    <div class="container-fluid" style={mainDiv}>
      <div class="row">
        <div class="col-sm-5">
          <img src={sectionBackground} style={sectionImg}></img>
        </div>
        <div class="col-sm-7">
          <div style={contentDiv}>
            <h1 style={sectionTitle}>Fractional Shares</h1>
            <h4 style={sectionBody}>
              We make investing affordable for anyone and everyone. <br /> Start with
              $1 today.
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron3;
