import './App.css';
import Header from './components/Header'
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';
import React, { useState } from 'react';


function App() {

  const [posts, setPostList] = useState([]);

  return (
    <div>
    <Header/>
    <CreatePostForm/>
    <PostList posts={posts}/>
    </div>
  );
}

export default App;
