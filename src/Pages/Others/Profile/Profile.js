import React, { useContext, useRef, useState } from 'react';
import { Button, Form, Image } from 'react-bootstrap';
import { FaUser } from 'react-icons/fa';
import { authContext } from '../../../AuthProvider/AuthProvider';

const Profile = () => {
const { user } = useContext(authContext);
const [name,setName]=useState(user?.displayName)
const photoURLRef=useRef(user?.photoURL)

const handleSubmit=(event)=>{
    event.preventDefault();
    console.log(photoURLRef.current.value)

}

const handleChange=event=>{
    setName(event.target.value);
    console.log(event.target.value)
}

return (
    <Form 
    onClick={handleSubmit}
        className='w-75 w-lg-50 mx-auto shadow p-3 mb-5 bg-white rounded p-lg-5  '>
        <h3 className='text-center'>Profile</h3>
        <div className='d-flex justify-content-center'>
            {
                user?.photoURL ?

                    <Image
                        className='d-flex justify-content-center'
                        roundedCircle
                        src={user?.photoURL}
                    >
                    </Image>
                    :
                    <FaUser
                        style={{ 'font-size': '35px' }}
                    />
            }

        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
                readOnly defaultValue={user?.email}
                name='email' type="email"
                placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Name</Form.Label>
            <Form.Control
                defaultValue={name}
                onChange={handleChange}
                name='name'
                type="text"
                placeholder="Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Photo URL</Form.Label>
            <Form.Control
                defaultValue={user?.photoURL}
                    ref={photoURLRef}
                name='name'
                type="text"
                placeholder="Name" />
        </Form.Group>

        <Button variant="success" type="submit">
            Login
        </Button>

    </Form>
);
};

export default Profile;