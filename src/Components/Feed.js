import React from 'react';
import Post from './Post';

const Feed = () => {
    // Replace this with actual data fetched from the API
    const postData = [
        { username: 'User1', date: 'Posted on Month Day, Year', content: 'This is an example post content.' },
        // Add more post objects here
    ];

    return (
        <div className="feed">
            {postData.map((post, index) => (
                <Post key={index} username={post.username} date={post.date} content={post.content} />
            ))}
        </div>
    );
};

export default Feed;
