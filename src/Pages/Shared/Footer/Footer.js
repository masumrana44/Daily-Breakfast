import React from "react";
import { Container, Row, Col, Nav, NavItem, NavLink } from "react-bootstrap";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="bg-black py-3">
            <Container>
                <Row>
                    <Col md={3}>
                        <h5 className="text-white">Site Map</h5>
                        <Nav className="flex-column">
                            <NavItem>
                                <NavLink href="#">Home</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">About Us</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Services</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Contact Us</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-white">Support</h5>
                        <Nav className="flex-column">
                            <NavItem>
                                <NavLink href="#">FAQ</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Help Center</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={3}>
                        <h5 className="text-white">Legal</h5>
                        <Nav className="flex-column d-flex justify-content-start">
                            <NavItem>
                                <NavLink href="#">Terms of Use</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#">Privacy Policy</NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col md={3} className="text-center">
                        <h5 className="text-white">Connect</h5>
                        <a href="#">
                            <FaFacebookF size={32} className="text-primary mx-3" />
                        </a>
                        <a href="#">
                            <FaTwitter size={32} className="text-primary mx-3" />
                        </a>
                        <a href="#">
                            <FaInstagram size={32} className="text-primary mx-3" />
                        </a>
                        <form className="w-75 d-flex align-items-center ">
                            <input type="email" placeholder="Enter your email" className="p-2 my-3" />
                            <button type="submit" className="btn btn-primary p-2">Subscribe</button>
                        </form>
                    </Col>


                </Row>
            </Container>
        </footer>
    );
};

export default Footer;
