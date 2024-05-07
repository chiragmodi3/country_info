import React from 'react';

const PostDetails = ({ post }) => {
    return (
        <div>
            <h1>{post.title}</h1>
            <p>Author: {post.author}</p>
            <p>URL: {post.url}</p>
            <p>Created At: {post.created_at}</p>
            <p>Raw JSON: {JSON.stringify(post)}</p>
        </div>
    );
};

export default PostDetails;
