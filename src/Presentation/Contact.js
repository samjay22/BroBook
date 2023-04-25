import React from 'react';
import TopBar from '../Components/NavComponent';
import FooterComponent from '../Components/FooterComponent';
import ContactInfo from "../Components/Contact/ContactInfo";
import ContactForm from "../Components/Contact/ContactForm";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from 'framer-motion';

export default function Contact() {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
    };

    return (
        <div>
            <TopBar />
            <motion.main
                className="main-content py-5"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <Container>
                    <Row>
                        <Col md={6}>
                            <h1 className="text-primary">Contact Us</h1>
                            <p className="lead mb-5">
                                Fill out the form below or contact us directly via email or phone.
                            </p>
                            <ContactForm />
                        </Col>
                        <Col md={6}>
                            <ContactInfo />
                        </Col>
                    </Row>
                </Container>
            </motion.main>
            <FooterComponent />
        </div>
    );
}
