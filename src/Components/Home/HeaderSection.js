import React from 'react';
import { Col, Container, Row, Button } from 'react-bootstrap';

export default function HeaderSection() {
    return (
        <section className="header-section">
            <Container className="mb-2 mt-2">
                <Row>
                    <Col md={6}>
                        <div className="header-text">
                            <h1 className="display-4 text-primary">
                                Welcome to County Line Christian Fellowship Church!
                            </h1>
                            <p className="lead">
                                We are a community of believers who strive to love God and love others, just as Jesus taught us. Our mission is to spread the love and message of Jesus Christ to our community and beyond through worship, service, and fellowship. We welcome you to join us in worship and fellowship, and to experience the love and grace of Jesus Christ.
                            </p>
                            <Button
                                variant="primary"
                                size="lg"
                                target="_blank"
                                href="https://www.google.com/maps?q=409+Indian+Springs+St,+Jackson,+GA,+United+States"
                            >
                                Join Us
                            </Button>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="header-image">
                            <img
                                className="img-fluid rounded"
                                src="https://picsum.photos/800/600"
                                alt="Welcome to County Line Christian Fellowship Church"
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
