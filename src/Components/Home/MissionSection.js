import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function MissionSection() {
    return (
        <main className="main-content py-5 bg-light">
            <Container>
                <Row className="align-items-center">
                    <Col md={6} className="order-md-2 mb-5 mb-md-0">
                        <div className="p-4 p-md-5 bg-white shadow rounded">
                            <h2 className="text-primary mb-4">Our Mission</h2>
                            <p className="lead">
                                At County Line Christian Fellowship, we strive to be a welcoming community that honors God, supports one another, and serves our neighbors with love and compassion.
                            </p>
                            <Button href="/About" variant="primary" className="mt-4">
                                Learn More
                            </Button>
                        </div>
                    </Col>
                    <Col md={6} className="order-md-1">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="https://picsum.photos/800/600" alt="Our Mission" />
                        </div>
                    </Col>
                </Row>
            </Container>
        </main>
    );
}
