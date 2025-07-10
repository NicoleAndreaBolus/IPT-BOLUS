import React from 'react'
import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


export default function Register() {
  return (
    <Container fluid className='p-5 d-flex my-5 shadow rounded w-50'>
            <Container className='align-items-center text-center me-auto'>
                <img src="https://web.ua.edu.ph/wp-content/uploads/2024/09/ua-logo.png" alt="UTask Logo" className='d-block mx-auto mb-4' style={{width: '150px'}} />
                <h1 className='text-center mb-4'>Welcome to UTask</h1>
                <h4 className='text-center mb-4'>Please register to continue.</h4>
                <p className='text-center'>Already have an account? <a href="/login">Login here</a></p>
            </Container>
        <Container>
            <h1 className='text-center mb-4 fw-bold'>REGISTER</h1>
            <h4 className='text-center mb-4'>Please fill in the details below.</h4>

            <Form className='mx-auto'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Student ID Number</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Student ID" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>First Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your First Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicLastName">
                <Form.Label>Last Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Your Last Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email Address</Form.Label>
                <Form.Control type="email" placeholder="Enter Your email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Create Your Password" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                <Form.Control type="password" placeholder="Confirm Your Password" />
                </Form.Group>

                <Button variant="primary" type="submit" className='justify-content-center d-block mx-auto w-50'>
                Register
                </Button>
            </Form>
        </Container>

    </Container>
    
    

    
  )
}
