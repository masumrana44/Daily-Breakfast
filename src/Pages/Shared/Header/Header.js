import React, { useContext, useState } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { authContext } from '../../../AuthProvider/AuthProvider';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import { FaUser } from "react-icons/fa";

const Header = () => {


    const { user, logOut } = useContext(authContext);


    const displayName = user?.displayName;
    const photoURL = user?.photoURL
    const uid = user?.uid;


    return (
        <Navbar collapseOnSelect className='mb-4' expand="lg" bg="light" variant="light">
            <Container>
                <Navbar.Brand ><Link className='text-decoration-none text-success h4 ' to='/'>Daily Breakfast</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">All News</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav >
                    <Nav className='d-flex align-items-center'>
                        <nav className='d-flex align-items-center'>
                            {
                                uid ?
                                    <>
                                        <Button
                                            onClick={logOut}
                                            className='me-3'
                                            variant="outline-secondary">Logout</Button>
                                        <span className='me-2'>{displayName}</span>

                                    </>
                                    :
                                    <>
                                        <Link to='/login'
                                         className='text-decoration-none text-secondary me-4'
                                        >
                                            Login
                                        </Link>
                                        <Link to='/register'
                                        className='text-decoration-none text-secondary me-1'
                                        >
                                            Register
                                        </Link>

                                    </>
                            }



                        </nav>
                        <Link to='/profile' >
                            {
                                photoURL ?
                                    <Image
                                        style={{ height: '32px' }}
                                        roundedCircle
                                        src={photoURL}
                                    >

                                    </Image>
                                    :
                                    <FaUser />
                            }
                        </Link>
                    </Nav>
                    <div className='d-lg-none'>
                        <LeftSideNav></LeftSideNav>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;