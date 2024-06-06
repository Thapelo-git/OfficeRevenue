import React from 'react'
import {Form } from 'react-bootstrap'
function Register() {
  return (
   <Form className='bg-light text-dark p-5 border '>
    <div className='row'>
    <Form.Group className='mb-3 col-lg-6' controlId='FirstName'>
    <Form.Label className='w-100 text-start text-capitalize'>
   First Name</Form.Label>
    <Form.Control type='text'/>
    </Form.Group>
    <Form.Group className='mb-3 col-lg-6' controlId='LastName'>
    <Form.Label className='w-100 text-start text-capitalize'>
   Last Name</Form.Label>
    <Form.Control type='text'/>
    </Form.Group>
    </div>
    
   </Form>
  )
}

export default Register