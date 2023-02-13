import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Login = () => {
  const [error,setError]=useState('');
  const navigate=useNavigate()
  const location=useLocation()
  const from=location.state?.from?.pathname ||'/'
    const {loginWithEmail,setLoading}=useContext(authContext);
    const handleLogin=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        
        loginWithEmail(email,password)
        .then((result)=>{
            const user=result.user;
            form.reset();
            setError('');

            if(user?.emailVerified){
              navigate(from,{replace:true})
            }
            else{
              toast.error("Your email is not verified. Please Verify your email")
            }
           
            console.log(user)
        })
        .catch(error=>{
            console.error(error.message);
            if(error.message==='Firebase: Error (auth/wrong-password).'){
              setError('Wrong Password');
              return
            }
            if(error.message==='Firebase: Error (auth/user-not-found).'){
              setError('User has not found')
              return
            }
        })
        .finally(()=>{
          setLoading(false)
        })

    }
    return (
        <Form onSubmit={handleLogin} className='w-75 w-lg-50   mx-auto shadow p-3 mb-5 bg-white rounded p-lg-5  '>
        <h3 className='text-center'>Login</h3>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control name='email' type="email" placeholder="Enter email" />
      
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control name='password' type="password" placeholder="Password" />
    </Form.Group>
    <Form.Group className="mb-3 text-danger" >
       {error}
    </Form.Group>
    <Button variant="success" type="submit">
      Login
    </Button>
    <span className='d-block mt-3 text-success'>
        You have no account.Please <Link   
         to='/register'>Register</Link>
    </span>
  </Form>
    );
};

export default Login;