import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostList from './PostList';

const App = () => {
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          `https://hn.algolia.com/api/v1/search_by_date?tags=story&page=${page}`
        );
        setPosts(response.data.hits);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, [page]);

  return (
    <div>
      <PostList posts={posts} />
      <button onClick={() => setPage((prevPage) => prevPage + 1)}>Load More</button>
    </div>
  );
};

export default App;
