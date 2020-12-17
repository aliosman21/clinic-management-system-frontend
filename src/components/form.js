import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import React from "react";

class form extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         name: "",
         email: "",
         pass: "",
         address: "",
      };
   }
   handleClick() {
      console.log("this is:", this);
   }
   handleNameChange(e) {
      this.setState((state) => {
         return { [e.target.name]: e.target.value };
      });
      //console.log(this);
      console.log(this);
   }

   render() {
      return (
         <Form>
            <Form.Row>
               <Form.Label>Name</Form.Label>
               <Form.Control
                  type="text"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(e) => {
                     this.handleNameChange(e);
                  }}
               />

               <Form.Label>Email</Form.Label>
               <Form.Control
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  onChange={(e) => {
                     this.handleNameChange(e);
                  }}
               />
            </Form.Row>
            <Form.Row>
               <Form.Label>Password</Form.Label>
               <Form.Control
                  type="password"
                  placeholder="Password"
                  name="pass"
                  onChange={(e) => {
                     this.handleNameChange(e);
                  }}
               />
            </Form.Row>

            <Form.Row>
               <Form.Label>Address</Form.Label>
               <Form.Control
                  placeholder="1234 Main St"
                  name="address"
                  onChange={(e) => {
                     this.handleNameChange(e);
                  }}
               />
            </Form.Row>

            <br></br>
            <Button variant="primary" type="button" onClick={() => this.handleClick()}>
               Submit
            </Button>
         </Form>
      );
   }
}

export default form;
