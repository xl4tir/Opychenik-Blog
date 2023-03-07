import React, { useState } from 'react';
import {Navbar, Nav,  Button, Container, Modal, Form} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const Styles = styled.div `
  a, .navbar-brand, .navbar-nav .nav-link{
    color: #adb1b8;
    text-decoration:none;
    &:hover{
      color: white;
    }
  }
`

export default function NaviBar(){

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
  <>
  <Styles>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand>Opychenik Blog</Navbar.Brand>
          <Navbar.Toggle aria-controls = "responsive-navbar-nav"/>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link><Link to ="/">Home</Link></Nav.Link>
              <Nav.Link><Link to ="/users">Users</Link></Nav.Link>
              <Nav.Link><Link to ="/about">About</Link></Nav.Link>
            </Nav>
            <Nav>
              <Button variant = "primary" className="me-3" onClick={handleShow}>Log In</Button>
              <Button variant = "primary" >Sign out</Button>
            </Nav>
          </Navbar.Collapse>
          </Container>
    </Navbar>
  </Styles>

  <Modal show={show} onHide = {handleClose}>
    <Modal.Header closeButton>
      <Modal.Title>Log in</Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <Form>
        <Form.Group controlId = "formBasicEmail">
            <Form.Label>Mail Adress</Form.Label>
            <Form.Control type ="email" placeholder="Enter email" />
            <Form.Text className = "text-muted">We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className="mt-3" controlId = "formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type ="password" placeholder="Enter password" />
        </Form.Group>
        <Form.Group className="mt-3" controlId = "formBasicCheckbox">
            <Form.Check  type ="checkbox" label = "Remember me." />
        </Form.Group>

        <Form.Group className="mt-3" controlId = "formButton">
            <Button variant = "success" >Log in</Button>
        </Form.Group>



      </Form>
    </Modal.Body>

  </Modal>
  </>
)}
