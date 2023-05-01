import React from 'react';
import {Col, Container, Row} from 'react-bootstrap';
import Header from '../Components/NavBar';
import UserProfile from '../Components/UserProfile';
import PostForm from '../Components/PostForm';
import Feed from '../Components/Feed';
import Footer from '../Components/Footer';

const HomePage = () => {
    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <UserProfile />
                </Col>
                <Col md={8}>
                    <PostForm />
                    <Feed />
                </Col>
            </Row>
        </Container>
    );
};

export default HomePage;
