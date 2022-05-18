import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';
import './Login.css';

const Login = () => {



    const navigate = useNavigate();
    const location = useLocation();
    let errorElement ;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);

    let from = location.state?.from?.pathname || "/";

    if(loading){
        return <Loading></Loading>
    }
    if (user) {
        navigate(from, { replace: true });
    }

    if (error) {
        errorElement = <p className='text-danger'>Error: {error.message}</p> 
    };
    
    const handleSubmit = event =>{
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(email, password);

    }


    return (
        <div className=''>
            <h2 className='text-center text-primary my-3'>Please Login</h2>
            <Form className='w-50 mx-auto shadow-lg p-5 bg-white my-5' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" name='email' autoComplete='off' required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" autoComplete='off' required name='password' />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree with terms And conditions" required />
                </Form.Group>
                {error ? alert(error.message) : <></>}
                <Button  variant="primary" type="submit">
                    Login Login
                </Button>
                <br />
                <Form.Label className='mt-2'>New to Maya Warehouse System ??
                </Form.Label>
                    <Link style={{marginLeft:'5px'}} to='/register'>Please Register</Link>
                    <br />
            </Form>
        </div>
    );
};

export default Login;