import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../../firebase.init';

const Register = () => {
    

    // react firebase hooks 

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    // hadle register button
    const handleRegister = event => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value ;
        const password = event.target.password.value ;
        console.log(name,email,password);
        
        createUserWithEmailAndPassword(email, password);

        toast('Sent email');

    }
    return (
        <div className=''>
            <h2 className='text-center text-primary my-3'>Please Register</h2>
            <Form className='w-50 mx-auto shadow-lg p-5 bg-white mb-5' onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter Your Name" name='name' autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='off' required />
                </Form.Group>


                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" name='password' autoComplete='off' required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" required />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <br />
                <Form.Label className='mt-2'>Already Have an Account ??
                </Form.Label>
                <Link  style={{ marginLeft: '5px' }} to='/login'>Please Login</Link>
                <br />
            </Form>

            {/* added toast container  */}
            <ToastContainer />
        </div>
    );
};

export default Register;