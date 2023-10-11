import './App.css';
import Header from './components/Header/Header'
import PostList from './components/PostList/PostList';
import CreatePostForm from './components/CreatePostForm/CreatePostForm';
import React, { useState } from 'react';



function App() {

  const [posts, setPostList] = useState([]);

  const handleNewPost = (newPost) => {
    const updatedPosts = [...posts, newPost];
    setPostList(updatedPosts);
  }

  return (
    <div>
    <Header/>
      <div className = "flex-container">
        <CreatePostForm onNewPost={handleNewPost}/>
        
      </div>
    <PostList posts={posts}/>
    </div>
  );
}

export default App;
