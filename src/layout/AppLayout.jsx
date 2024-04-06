import "./AppLayout.style.css";
import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Outlet,useNavigate } from 'react-router-dom'


const AppLayout = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Navbar expand="lg" className="bg-body-black">
        <Container fluid="lg">
          <Navbar.Brand onClick={() => navigate('/')}>
            <img
              style={{ maxHeight: '25px' , cursor:"pointer"}}
              src="./image/netflix_logo.png" alt="logo"/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <Nav.Link style={{ color: "white" }} onClick={() => navigate('/')}>Home</Nav.Link>
              <Nav.Link style={{ color: "white" }} onClick={() => navigate('/movies')}>Movies</Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-danger">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet/>
    </div>
  )
}

export default AppLayout