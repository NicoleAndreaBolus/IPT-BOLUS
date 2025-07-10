import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Login() {
  return (
    <Container fluid className='p-5 d-flex my-5 shadow rounded w-50'>
      <Container className='align-items-center text-center me-auto'>
        <img src="https://web.ua.edu.ph/wp-content/uploads/2024/09/ua-logo.png" alt="UTask Logo" className='d-block mx-auto mb-4' style={{width: '150px'}} />
        <h1 className='text-center mb-4'>Welcome to UTask</h1>
        <h4 className='text-center mb-4'>Please login to continue.</h4>
        <p className='text-center'>Don't have an account? <a href="/register">Register here</a></p>
      </Container>
      <Container>
        <h1 className='text-center mb-4 fw-bold'>LOGIN</h1>
        <h4 className='text-center mb-4'>Please enter your credentials.</h4>

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Address</Form.Label>
            <Form.Control type="email" placeholder="Enter Your email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Enter Your Password" />
          </Form.Group>

          <Button variant="primary" type="submit" className='justify-content-center d-block mx-auto w-50'>
            Login
          </Button>
        </Form>
      </Container>

    </Container>
  )
}
