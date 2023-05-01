import React from 'react';
import {Button, Card} from 'react-bootstrap';

const Post = ({ username, date, content }) => {
    return (
        <Card className="mb-3">
            <Card.Header>
                <Card.Title>{username}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{date}</Card.Subtitle>
            </Card.Header>
            <Card.Body>
                <Card.Text>{content}</Card.Text>
            </Card.Body>
            <Card.Footer>
                <Button variant="outline-primary" size="sm">Like</Button>{' '}
                <Button variant="outline-primary" size="sm">Comment</Button>{' '}
                <Button variant="outline-primary" size="sm">Share</Button>
            </Card.Footer>
        </Card>
    );
};

export default Post;
