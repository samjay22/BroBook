import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import FooterLogo from './Footer/FooterLogo';
import FooterLinks from './Footer/FooterLinks';
import FooterSocial from './Footer/FooterSocial';

export default function FooterComponent(): JSX.Element {
    return (
        <footer className="bg-light text-center text-lg-start">
            <Container className="p-4">
                <Row>
                    <Col lg={6} md={12} className="mb-4 mb-md-0">
                        <FooterLogo />
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <FooterLinks />
                    </Col>
                    <Col lg={3} md={6} className="mb-4 mb-md-0">
                        <FooterSocial />
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}
