import React from "react";
import Navbar from "../components/navbar";
import Button from "react-bootstrap/Button";
import RegModal from "../components/modal";
import "../styles/index.css";

function Mainpage() {
   const [modalShow, setModalShow] = React.useState(false);

   return (
      <div className="main">
         <div className="navigation">
            <Navbar></Navbar>
         </div>
         <div className="main-section">
            <div className="background"></div>
            <div className="upper-section">
               <Button className="login-btn" variant="primary">
                  Login
               </Button>
               <Button className="reg-btn" variant="success" onClick={() => setModalShow(true)}>
                  Register
               </Button>

               <RegModal show={modalShow} onHide={() => setModalShow(false)} />
            </div>
         </div>
      </div>
   );
}

export default Mainpage;
