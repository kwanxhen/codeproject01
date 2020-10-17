import React from "react";
import "./css/SignupCard.css";

function SignupCard() {
  
  const btn = {
    backgroundColor: "#00427E",
    color: "white",
  }

  const formTitle = {
    marginBottom: "15px",
    fontStyle: "normal",
    fontFamily: "Roboto",
    fontWeight: "bold",
    color: "#4F4F4F",
  }

  return (
    <div className="mainDiv">
      <form method="post">
        <h5 style={formTitle} >Create your account today</h5>
        <div class="form-group" >
          <input type="text" class="form-control" name="name" placeholder="Name" required="required" />
        </div>

        <div class="form-group">
            <input type="email" class="form-control" name="email" placeholder="Email" required="required" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control" name="password" placeholder="Password" required="required" />
        </div>

        <div class="form-group">
            <input type="password" class="form-control" name="confirm_password" placeholder="Confirm Password" required="required" />
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-lg btn-block" style={btn}>
            Sign Up
          </button>
        </div>

        <div class="form-group">
          <div class="row">
            <div class="col">
              <button type="submit" class="btn btn-primary btn-lg btn-block">Google</button>
            </div>
            <div class="col">
              <button type="submit" class="btn btn-secondary btn-lg btn-block">Metamask</button>
            </div>
          </div>
        </div>

      </form>
    </div>
  );
}

export default SignupCard;
