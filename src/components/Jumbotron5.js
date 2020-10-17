import React from "react";

function Jumbotron5() {
  const mainDiv = {
    height: "400px",
    backgroundColor: "#00427E",
  };

  const sectionContent = {
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    marginTop: "50px",
    color: "#FFFFFF",
    marginTop: "140px",
    marginLeft: "180px",
  }


  return (
    <div class="container-fluid" style={mainDiv}>
      <div class="row">
        <div style={sectionContent}>
          <h1>Companies listed on EquitEx</h1>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron5;
