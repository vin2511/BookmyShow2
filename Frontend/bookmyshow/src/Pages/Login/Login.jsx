import React, { useState } from 'react';
import { Form, Button, Modal, Container, Row, Col } from 'react-bootstrap';
import Navbar from '../../Components/NavBar/Navbar';
import "./Login.css";
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Formik, Field, ErrorMessage, useFormik } from 'formik';
import * as Yup from 'yup';


const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required'),
});

const registrationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required('Confirm password is required'),
});



const Login = () => {
  const navigate = useNavigate()

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [show, setShow] = useState(false);


  const formik = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { handleSubmitting }) => {
      // const data = {
      //   Email_id: values.email,
      //   Password: values.pass
      // }
      // const handleSubmit = async (e) => {
      //   e.preventDefault();
        try {
          let response = await axios.post('http://localhost:7000/loginOwner', {
            Email_id: values.email,
            Password: values.password,
          })
          localStorage.setItem('token', response.data.token)

          console.log(response.data.token)
          if (response.data.token !== undefined) {
            // Redirect to home page here
            navigate('/home')
          }
          else {
            alert("Unable to Login")
          }
        }
        catch (error) {
          console.log(error, "Unable to Login");
          // Handle error here
        };

        handleSubmitting(false)
      },
    
  })


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleRegister = async (values, actions) => {
    try {
      let response = await axios.post('http://localhost:7000/registerOwner', values);
      localStorage.setItem('token', response.data.token);
      handleClose();
    } catch (error) {
      console.log(error);
      actions.setSubmitting(false);
      alert('Error: Unable to register');
    }
  }

  return (
    <>
      <div className='container'>
        <div className="form-container">
          <Navbar />
          <h2>Login</h2>

          <Form className="login-form" onSubmit={formik.handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" name="email" value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.email && formik.errors.email ? <div className="error">{formik.errors.email}</div> : null}
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" name="password" value={formik.values.password} onChange={formik.handleChange} onBlur={formik.handleBlur} />
              {formik.touched.password && formik.errors.password ? <div className="error">{formik.errors.password}</div> : null}
            </Form.Group>

            <Button variant="primary" type="submit">
              Sign In
            </Button>
          </Form>

          <br />
          <Button variant="primary" onClick={handleShow}>
            Register
          </Button>
        </div>


        <div>
          <Modal
            show={show}
            onHide={handleClose}
            backdrop="static"
            keyboard={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Register</Modal.Title>
            </Modal.Header>
            <Modal.Body >
              <Container>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group className="mb-3" controlId="formBasicText">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" />
                      </Form.Group>

                      <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email_id</Form.Label>
                        <Form.Control type="email" placeholder="Email Address" />
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='forBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder='Set Password' />
                      </Form.Group>

                      <Form.Group className='mb-3' controlId='forBasicPassword'>
                        <Form.Label>Password_confirm</Form.Label>
                        <Form.Control type="password" placeholder='Password_confirmation' />
                      </Form.Group>
                    </Form>


                  </Col>

                </Row>
              </Container>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button variant="primary">Understood</Button>
            </Modal.Footer>
          </Modal>


        </div>
      </div>
    </>
  );
}

export default Login;
