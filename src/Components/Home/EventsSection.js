import React, { useState, useEffect } from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

import ChurchService from '../../Services/ChurchService';

export default function EventsSection() {
    const [events, setEvents] = useState([]);

    useEffect(() => {
        async function fetchEvents() {
            const eventsData = await ChurchService.FetchEvents();
            setEvents(eventsData);
        }

        fetchEvents();
    }, []);

    return (
        <Container className="mt-5">
            <Row>
                <Col>
                    <h2 className="text-primary">Upcoming Events</h2>
                </Col>
            </Row>
            <Row className="mt-3">
                <EventList events={events} />
            </Row>
            <Row className="mt-3">
                <Col className="d-flex justify-content-center">
                    <Button className="mb-2" href="/Events" variant="secondary">
                        See All Events
                    </Button>
                </Col>
            </Row>
        </Container>
    );
}

function EventList({ events }) {
    return events.map((event) => (
        <Col md={4} key={event.id}>
            <EventCard event={event} />
        </Col>
    ));
}

function EventCard({ event }) {
    const { title, imageUrl, description } = event;

    return (
        <div className="mb-4">
            <div className="card">
                <div className="card-img-top event-card-image">
                    <img src={imageUrl} alt={title} className="img-fluid" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                </div>
            </div>
        </div>
    );
}
