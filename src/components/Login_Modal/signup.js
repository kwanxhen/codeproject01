import React, { useEffect, useState }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './signup.css'

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const signupBtn = {
    backgroundColor: "inherit",
    color: "white",
    fontWeight: "bold",
    border: "none",
    marginRight: "5px",
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={signupBtn}>
        Signup
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div class="signupheader">Sign Up</div>
        <input class="signupfield" type="text" placeholder="Legal Name" name="legalname"/>
        <input class="signupfield" type="text" placeholder="Email Address" name="email"/>
        <input class="signupfield" type="text" placeholder="Password" name="password"/>
        <input class="signupfield" type="text" placeholder="Confirm Password" name="confirmpassword"/>
        <div class='checkboxborder'><input class='checkbox' type="checkbox"/><b>By Signing up, I agree to EquitEx's Term and Conditions</b></div>
        <button class="signupbutton">Signup</button>
        <div class='bottomspace'></div>
      </Modal>
    </>
  );
}

export default LoginModal