import React, { useEffect, useState }  from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './login.css'

function LoginModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const loginBtn = {
    backgroundColor: "#A6D2FB",
    color: "black",
    fontWeight: "bold",
    border: "none",
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow} style={loginBtn}>
        Login
      </Button>

      <Modal show={show} onHide={handleClose}>
        <div class="equitex">EquitEx</div>
        <input class="loginfield" type="text" placeholder="Email Address" name="email"/>
        <input class="loginfield" type="text" placeholder="Password" name="password"/>
        <button class="loginbutton">Login</button>
        <div class='signuptext'>Don't have an account yet? Sign Up Here</div>
        <div class='hrdiv'><hr class='hr1'/><span class='ortext'>Or</span><hr class='hr1'/></div>
        {/*<button onClick={handleClose}>close 2</button>*/}
        <button class="othersbutton">Sign In With Google</button>
        <button class="othersbutton">Sign In With MetaMask</button>
        <div class='bottomspace'></div>
      </Modal>
    </>
  );
}

export default LoginModal