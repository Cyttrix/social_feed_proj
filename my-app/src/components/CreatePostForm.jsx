import React, {useState} from 'react';

const CreatePostForm = ({}) => {
    const [user, setUser] = useState('');
    const [text, setText] = useState('');

    return (
        <form action="flex-item">
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