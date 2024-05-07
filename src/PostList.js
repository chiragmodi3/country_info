import React from 'react';

const PostList = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Author</th>
                        <th>Created At</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map((post) => (
                        <tr key={post.objectID}>
                            <td>{post.title}</td>
                            <td>{post.author}</td>
                            <td>{post.created_at}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PostList;
