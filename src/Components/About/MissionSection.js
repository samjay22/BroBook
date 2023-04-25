import React from 'react'
import {Col, Row} from 'react-bootstrap';
import ImageSection from "./ImageSection";

export default function MissionSection() {
    return (
        <Row>
            <Col md={6}>
                <ImageSection src="https://picsum.photos/500/500" alt="Our Mission" />
            </Col>
            <Col md={6}>
                <h2 className="mb-4">Our Mission: Spreading God's Love Through Community</h2>
                <p className="lead">At County Line Christian Fellowship Church, we believe that God's love should be reflected in everything we do, from our interactions with each other to the way we serve our community.</p>
                <p className="lead">Our goal is to create a welcoming, inclusive environment where everyone feels valued and loved, regardless of their background or beliefs. We strive to be a positive force for change in our community, showing God's love through our actions and service to others.</p>
            </Col>
        </Row>
    );
}
