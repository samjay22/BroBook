import React from 'react';
import {Card} from 'react-bootstrap';

const UserProfile = () => {
    return (
        <Card>
            <Card.Header>User Profile</Card.Header>
            <Card.Body>
                <Card.Subtitle className="mb-2 text-muted">Username</Card.Subtitle>
                <Card.Text>Bio: A short description about the user.</Card.Text>
                <Card.Text>Location: City, Country</Card.Text>
                <Card.Text>Joined: Month Year</Card.Text>
                <Card.Text>Followers: 1234</Card.Text>
                <Card.Text>Following: 5678</Card.Text>
            </Card.Body>
        </Card>
    );
};

export default UserProfile;
