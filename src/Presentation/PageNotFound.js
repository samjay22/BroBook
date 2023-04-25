import {Button, Col, Container, Row} from "react-bootstrap";
import TopBar from "../Components/NavComponent";
import React from "react";
import FooterComponent from "../Components/FooterComponent";

export default function NotFound() {
    return (
        <div>
            <TopBar />
            <main className="main-content py-5 not-found-container">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col md={8}>
                        <h1 className="not-found-heading text-center">Oops! Page Not Found</h1>
                        <p className="not-found-lead text-center">
                            We're sorry, but the page you're looking for doesn't exist or has been removed.
                        </p>
                        <div className="text-center">
                            <Button variant="primary" href="/">
                                Go Back to Homepage
                            </Button>
                        </div>
                    </Col>
                    <Col md={4} className="d-flex justify-content-center align-items-center">
                        <img
                            src={"https://media.istockphoto.com/id/1153372686/photo/404-error-page-not-found.jpg?b=1&s=170667a&w=0&k=20&c=yAVb0dfxHGQooo1-kmjyGnM5SY22TE82x34IfHFfhLI="}
                            alt="Page Not Found"
                            className="img-fluid rounded not-found-image"
                        />
                    </Col>
                </Row>
            </Container>
        </main>

            <FooterComponent />
        </div>
    );
}