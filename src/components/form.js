import React, { Component } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

class form extends Component {
   render() {
      return (
         <Form>
            <Form.Row>
               <Form.Label>Name</Form.Label>
               <Form.Control type="text" placeholder="Enter Full Name" />

               <Form.Label>Email</Form.Label>
               <Form.Control type="email" placeholder="Enter Email" />
            </Form.Row>
            <Form.Row>
               <Form.Label>Password</Form.Label>
               <Form.Control type="password" placeholder="Password" />
            </Form.Row>

            <Form.Row>
               <Form.Label>Address</Form.Label>
               <Form.Control placeholder="1234 Main St" />
            </Form.Row>

            <br></br>

            <Button
               variant="primary"
               type="submit"
               onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "http://localhost:3000/";
               }}>
               Submit
            </Button>
         </Form>
      );
   }
}

export default form;
