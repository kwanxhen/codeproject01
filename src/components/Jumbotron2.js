import React from "react";
import sectionBackground from "../images/Group 767.svg";

function Jumbotron2() {
  const mainDiv = {
    height: "400px",
    backgroundColor: "white",
    position: "relative",
    zIndex: "10",
  };

  const contentDiv = {
    marginTop: "95px",
    marginLeft: "180px",
  }

  const sectionTitle = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginBottom: "20px",
  };

  const sectionBody = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "medium",
    color: "#00427E",
    marginBottom: "20px",
  };

  const sectionImg = {
    position: "relative",
    zIndex: "20",
    marginTop: "-90px",
    height: "100%",
  };

  const sectionButton = {
    backgroundColor: "#00427E",
    color: "white",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
  }



  return (
    <div class="container-fluid" style={mainDiv}>
      <div class="row">
        <div class="col-sm-7">
          <div style={contentDiv}>
            <h1 style={sectionTitle}>Invest in Early Stage Startups</h1>
            <h4 style={sectionBody}>
              10x your investments today by taping into high <br />growth startups
            </h4>
            <button style={sectionButton} type="button" class="btn btn-lg">
              Invest Now
            </button>
          </div>
        </div>
        <div class="col-sm-5">
          <img src={sectionBackground} style={sectionImg}></img>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron2;
