import React, {useState} from 'react';
import {Button, Form} from 'react-bootstrap';

const PostForm = () => {
    const [postContent, setPostContent] = useState('');

    const handleChange = (event) => {
        setPostContent(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Perform the API call to submit the post here
        console.log('Submitted post:', postContent);
        setPostContent('');
    };

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group>
                <Form.Control
                    as="textarea"
                    placeholder="What's on your mind?"
                    style={{ height: '100px' }}
                    value={postContent}
                    onChange={handleChange}
                />
            </Form.Group>
            <Button className="mb-1 mt-1" variant="primary" type="submit">Post</Button>
        </Form>
    );
};

export default PostForm;
