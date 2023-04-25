import React from 'react';
import { Card, Button } from 'react-bootstrap';

export default function EventComp({ event, displayModalCallback }) {
    return (
        <Card>
            <Card.Img variant="top" src={event.imageUrl} />
            <Card.Body>
                <Card.Title>{event.title}</Card.Title>
                <Card.Text>{event.description}</Card.Text>
                <Button onClick={() => displayModalCallback(event)} variant="primary">
                    Learn More
                </Button>
            </Card.Body>
        </Card>
    );
}
