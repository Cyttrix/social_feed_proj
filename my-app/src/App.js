import './App.css';
import Header from './components/Header'
import PostList from './components/PostList';
import CreatePostForm from './components/CreatePostForm';

function App() {
  return (
    <div>
    <Header/>
    <CreatePostForm/>
    <PostList/>
    </div>
  );
}

export default App;
