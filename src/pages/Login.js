import React, { useContext } from 'react';
import { GoogleButton } from 'react-google-button';
import AuthContext from '../context/AuthContext';

const Login = () => {
    const { googleSignIn } = useContext(AuthContext);

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (err) {
            console.log(err)
        }
    }

  return (
    <div className='bg-papayawhip h-screen'>
      <h1 className='text-center text-3xl font-bold py-8'>Sign in</h1>
      <div className='max-w-[240px] m-auto py-4'>
        <GoogleButton onClick={handleGoogleSignIn}/>
      </div>
    </div>
  )
}

export default Login
