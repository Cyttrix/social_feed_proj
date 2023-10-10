import React, {useState} from 'react';

const CreatePostForm = ({}) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const postData = {
            user,
            text,
        }

        console.log(postData);
    }

    return (
        <form onSubmit={handleSubmit} action="flex-item">
            <div>
                <label>Name</label>
                <input value={user} onChange={(e) => setUser(e.target.value)} />
            </div>
            <div>
                <label>Post</label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <button type="submit">Post</button>
        </form>
    )
}

export default CreatePostForm;