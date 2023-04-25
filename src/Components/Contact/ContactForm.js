import React from 'react';
import { Button, Col, Form } from 'react-bootstrap';

export default function ContactForm() {
    return (
        <Form className="contact-form">
            <h2 className="text-primary mb-4">Contact Us</h2>
            <Form.Group controlId="formName">
                <Form.Label className="font-weight-bold">Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
            </Form.Group>
            <Form.Group controlId="formEmail">
                <Form.Label className="font-weight-bold">Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email address" required />
            </Form.Group>
            <Form.Group controlId="formMessage">
                <Form.Label className="font-weight-bold">Message</Form.Label>
                <Form.Control as="textarea" rows={5} placeholder="Enter your message" required />
            </Form.Group>
            <div className="mt-4">
                <Button variant="primary" type="submit" className="btn-lg px-5 py-2">
                    Send
                </Button>
            </div>
        </Form>
    );
}
