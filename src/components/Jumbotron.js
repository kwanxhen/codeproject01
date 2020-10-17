import React from "react";
import SignupCard from "./SignupCard";
import Background from "../images/landing-page.jpeg";


function Jumbotron() {
  const mainDiv = {
    height: "600px",
    backgroundImage: `url(${Background})`,
    backgroundSize: "2000px",
    backgroundPosition: "100% 60%",
    position: "relative",
    zIndex: "9",
  };

  const btnSignUp = {
    backgroundColor: "#00427E",
    color: "white",
    marginLeft: "130px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
  };

  const titleDiv = {
    marginTop: "150px",
    width: "750px",
    color: "white",
    marginLeft: "130px",
    marginBottom: "20px"
  };

  const title = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
  }

  return (
    <div class="container-fluid">
      <div class="row" style={mainDiv} >
      
        <div class="col">
          <div style={titleDiv}>
            <h1 style={title} class="display-4">World's First <br />Blockchain-Powered <br /> Equity Exchange</h1>
          </div>

          <button type="button" class="btn btn-lg" style={btnSignUp}>
            Sign Up Now
          </button>
        </div>

        <div class="col">
          <SignupCard />
        </div>
        

      </div>
    </div>
  );
}

export default Jumbotron;
