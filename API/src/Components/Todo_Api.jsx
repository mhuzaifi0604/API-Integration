import React, { useState } from 'react';
import axios from 'axios';

function Todo() {
  const [postData, setPostData] = useState([]);
  const [error, setError] = useState(null);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [userId, setUserId] = useState('');

  const handlePostRequest = async () => {
    try {
      const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {
        title: title,
        body: body,
        userId: userId,
      });
      const newPostData = response.data;
      setPostData((prevData) => [...prevData, newPostData]);
      setError(null); 
      setTitle('');
      setBody('');
      setUserId('');
    } catch (error) {
      setPostData([]); 
      setError('Error creating post'); 
    }
  };

  return (
    <div className="bg-black min-h-screen p-4">
      <h1 className="text-teal-500 font-bold font-sans text-center text-3xl mb-4">Create Post</h1>
      <form className="flex items-center justify-center mb-4">
      <input
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
          placeholder="User ID"
          className="text-white border border-teal-500 bg-transparent m-2 h-10 rounded-lg w-1/4"
        />
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="text-white border border-teal-500 bg-transparent m-2 h-10 rounded-lg w-1/4"
        />
        <input
          type="text"
          value={body}
          onChange={(e) => setBody(e.target.value)}
          placeholder="Body"
          className="text-white border border-teal-500 bg-transparent m-2 h-10 rounded-lg w-1/4"
        />
        <button
          type="button"
          onClick={handlePostRequest}
          className="rounded-lg text-teal-500 border border-teal-500 h-10 p-2 font-bold ml-4 hover:bg-teal-500 hover:text-black"
        >
          Create Post
        </button>
      </form>

      {postData.length > 0 && (
        <div className="flex justify-center items-center">
          <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
            {postData.map((post) => (
              <div key={post.id} className="border border-gray-500 p-2 shadow-md shadow-gray-400 hover:animate-pulse">
                <h3 className="text-teal-500 font-bold">{post.userId} - {post.title}</h3>
                <p className="text-gray-200">{post.body}</p>
                
              </div>
            ))}
          </div>
        </div>
      )}

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

export default Todo;
