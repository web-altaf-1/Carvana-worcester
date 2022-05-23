import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const navigate = useNavigate();
    let errorElement;
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>
    }


    if (user) {
        navigate('/')
    }



    const handleGoogleSignIn = () => {
        signInWithGoogle();
    }


    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='w-50 bg-primary'></div>
            </div>
            {errorElement}
            <div>
                <button className='btn btn-primary d-flex mx-auto' onClick={() => handleGoogleSignIn()}>SIgn in with Google</button>
            </div>
        </div>
    );
};

export default SocialLogin;