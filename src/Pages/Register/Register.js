import React, { useContext, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { authContext } from '../../AuthProvider/AuthProvider';

const Register = () => {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [accepted,setAccepted]=useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.form?.pathname || '/'


  const { createUser,updateInfo,emailVerify } = useContext(authContext);

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const name = form.name.value;
    const password = form.password.value;
    const conPassword = form.conPassword.value;

    //  Set password Error /set Password regex special charecter

    if (password !== conPassword) {
      return setError("Your password did not match")
    }
    if (!/(?=.*[0-9])/.test(conPassword)) {
      return setError('Password should be at least one number character')
    }
    if (!/(?=.*?[A-Z])/.test(conPassword) && /(?=.*?[a-z])/.test(conPassword)) {
      return setError('Please. Password should be at least one Uppercase and one LowerCase')
    }
    if (!/(?=.*?[#?!@$%^&*-])/.test(conPassword)) {
      return setError('Password should be at least one Special Character')
    }
    if (!/.{6,}/.test(conPassword)) {
      return setError('Password should be at least 6 character')
    }

    if (/(?=.*[0-9])/.test(conPassword) && /(?=.*?[A-Z])/.test(conPassword) && /(?=.*?[a-z])/.test(conPassword) && /(?=.*?[#?!@$%^&*-])/.test(conPassword) && /.{6,}/.test(conPassword)) {
      setSuccess(true);
      setError('Strong Password')
    }


    console.log(email, name, password, conPassword)

    createUser(email, conPassword)
      .then((result) => {
        updateInfo(name)
        emailVerify()
        .then(()=>{
          toast.success('Please Cheack your email')
        })
        const user = result.user;
        form.reset()
        navigate(from, { replace: true })
        console.log(user)
      })
      .catch(error => {
        console.error(error);
      })



  }

  const handleAccepted=(event)=>{
   setAccepted(event.target.checked)
  }

  return (
    <Form onSubmit={handleRegister} className='w-75 w-lg-50 mx-auto shadow p-3 mb-5 bg-white rounded p-5 '>
      <h3 className='text-center'>Register</h3>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Your Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter name" />

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" required />

      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" required />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConPassword">
        <Form.Label>Confrim Password</Form.Label>
        <Form.Control type="password" name='conPassword' placeholder="Confrim Password" required />
      </Form.Group>
      <Form.Group className={`mb-3  ${success ? 'text-success' : 'text-danger'}`}  >
        {error}
      </Form.Group >

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check 
        type="checkbox"
        onClick={handleAccepted}
         label={<>Accept <Link to='/terms'>Terms and Conditions</Link></>} />
      </Form.Group>

      <div className='d-flex justify-content-center'>
        <Button
         className='w-50 mt-3'
            variant="success"
            type="submit"
            disabled={!accepted}
            >
          Register
        </Button>
      </div>
      <span className='text-success ms-3 mt-5'>
        Already have an account <Link to='/login'>Login</Link>
      </span>
    </Form>
  );
};

export default Register;