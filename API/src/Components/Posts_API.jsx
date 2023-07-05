import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Form from './form';
import axios from 'axios';

function Posts() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState('');
    const [check, setCheck] = useState(false);
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');

    const handleInputChange1 = (event) => {
        setValue1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setValue2(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        // Convert values to numbers
        const startIndex = parseInt(value1 - 1);
        const endIndex = parseInt(value2);

        try {
            const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
            const data = response.data;

            // Filter data based on the provided range
            const filteredPosts = data.slice(startIndex, endIndex);

            setPosts(filteredPosts);
        } catch (error) {
            setCheck(true);
            setError(error.message);
        }

        // Clear the input fields
        setValue1('');
        setValue2('');
    };

    useEffect(() => {
        handleSubmit(); // Fetch initial data when the component mounts
    }, []);

    return (
        <div className="bg-black min-h-screen pb-4">
            <h1 className=" text-teal-500 font-bold font-sans text-center text-3xl">GET API - Posts Data</h1>
            <div className="flex flex-col justify-center items-center text-teal-500 overflow-auto py-8">
                <Form
                    handleSubmit={handleSubmit}
                    handleInputChange1={handleInputChange1}
                    handleInputChange2={handleInputChange2}
                    value1={value1}
                    value2={value2}
                />
            </div>
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
                {check ?
                    <p>Something Went Wrong</p> :
                    posts.map((post) => {
                        const { id, title, body } = post;
                        return (
                            <div className="p-2 border border-gray-400" key={id}>
                                <h2 className="font-extrabold text-center text-white">{id} - {title.slice(0, 15)}</h2>
                                <p className="italic text-justify text-teal-500">{body.slice(0, 150)}</p>
                            </div>
                        )
                    })
                }
            </div>
            <Outlet />
        </div>
    )
}

export default Posts;
