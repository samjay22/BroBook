import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export default function ContactInfo() {
    return (
        <Card className="contact-info">
            <Card.Header as="h2" className="text-primary">Contact Information</Card.Header>
            <ListGroup variant="flush">
                <ListGroup.Item>
                    <strong>Email:</strong> info@countylinechurch.com
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Phone:</strong> (123) 456-7890
                </ListGroup.Item>
                <ListGroup.Item>
                    <strong>Address:</strong> 409 Indian Springs St, Jackson, GA, United States
                </ListGroup.Item>
            </ListGroup>
            <Card.Footer>
                <Card.Text>Find us on the map:</Card.Text>
                <iframe
                    title="Google Maps"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3336.208688376634!2d-83.9594079839486!3d33.30060188082227!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f59bb557b11489%3A0xef6791f2233b4e7d!2s409%20Indian%20Springs%20St%2C%20Jackson%2C%20GA%2030203%2C%20United%20States!5e0!3m2!1sen!2sus!4v1659240141712!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen
                ></iframe>
            </Card.Footer>
        </Card>
    );
}
