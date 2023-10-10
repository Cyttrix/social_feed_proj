import React, {useState} from 'react';
import './CreatePostForm.css';

const CreatePostForm = ({onNewPost}) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            user,
            text,
        }

       onNewPost(postData);
    }

    return (
    
        <form onSubmit={handleSubmit}>
            <div>
                <label>Name</label>
                <textarea value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <textarea value={text} onChange={(e) => setText(e.target.value)}/>
            </div>
            <button type="submit">Post</button>
        </form>
    
    )
}

export default CreatePostForm;