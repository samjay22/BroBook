import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { FaHome, FaInfo, FaCalendarAlt, FaEnvelope } from 'react-icons/fa';

export default function TopBar() {
    const navbarVariants = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                delay: 0.3,
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    const navLinkVariants = {
        hidden: {
            opacity: 0,
            y: -20,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                ease: 'easeOut',
            },
        },
    };

    return (
        <motion.nav
            className="sticky-top"
            variants={navbarVariants}
            initial="hidden"
            animate="visible"
        >
            <Navbar bg="dark" expand="lg" variant="dark">
                <Container>
                    <Navbar.Brand href="/" className="fs-4 fw-bold mr-auto">
                        County Line Christian Fellowship Church
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbar-nav" />
                    <Navbar.Collapse id="navbar-nav">
                        <Nav className="ms-auto">
                            <motion.div
                                variants={navLinkVariants}
                                initial="hidden"
                                animate="visible"
                            >
                                <Nav.Link href="/" className="nav-link-custom me-4">
                                    <FaHome size={24} />
                                    <span className="ms-2">Home</span>
                                </Nav.Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.1 }}
                            >
                                <Nav.Link href="/About" className="nav-link-custom me-4">
                                    <FaInfo size={24} />
                                    <span className="ms-2">About Us</span>
                                </Nav.Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.2 }}
                            >
                                <Nav.Link href="/Events" className="nav-link-custom me-4">
                                    <FaCalendarAlt size={24} />
                                    <span className="ms-2">Events</span>
                                </Nav.Link>
                            </motion.div>
                            <motion.div
                                variants={navLinkVariants}
                                initial="hidden"
                                animate="visible"
                                transition={{ delay: 0.3 }}
                            >
                                <Nav.Link href="/Contact" className="nav-link-custom me-4">
                                    <FaEnvelope size={24} />
                                    <span className="ms-2">Contact</span>
                                </Nav.Link>
                            </motion.div>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </motion.nav>
    );
}
