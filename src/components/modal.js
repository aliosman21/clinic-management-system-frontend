import React from "react";
import Modal from "react-bootstrap/Modal";
import Regform from "./form";

function Modalvertical(props) {
   return (
      <Modal {...props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
         <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-vcenter">Modal heading</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            <Regform></Regform>
         </Modal.Body>
         <Modal.Footer></Modal.Footer>
      </Modal>
   );
}

export default Modalvertical;
