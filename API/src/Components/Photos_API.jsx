import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Form from "./form";
import axios from 'axios';
import GridLoader from 'react-spinners/GridLoader';

function Photos() {
  const [images, setImages] = useState([]);
  const [error, setError] = useState(null);
  const [value1, setValue1] = useState('');
  const [value2, setValue2] = useState('');
  const [loading, setloading] = useState(false);

  const handleInputChange1 = (event) => {
    setValue1(event.target.value);
  };

  const handleInputChange2 = (event) => {
    setValue2(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const accessKey = 'wIpEwo1rLd156HoUn8ncoZsbk1IFSCvcjfLPZEvmEoU';
    // const startIndex = parseInt(value1 - 1);
    // const endIndex = parseInt(value2);

    try {
      setloading(true);
      const response = await axios.get('https://api.unsplash.com/photos/random', {
        params: {
          count: parseInt(value2) - parseInt(value1), // Number of images to retrieve based on range
          client_id: accessKey,
        },
      });
      const fetchedImages = response.data.map((image) => image.urls.regular);
      setImages(fetchedImages);
      setError(null);
    } catch (error) {
      console.error('Error fetching images:', error);
      setImages([]);
      setError('Error fetching images');
    } finally{
      setloading(false);
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
      <h1 className="text-teal-500 font-bold font-sans text-center text-3xl mb-4">GET API - Photos Data</h1>
      <div className="flex justify-center mb-4">
        <Form
          handleSubmit={handleSubmit}
          handleInputChange1={handleInputChange1}
          handleInputChange2={handleInputChange2}
          value1={value1}
          value2={value2}
        />
      </div>
      {loading ? (
        <div className="flex justify-center items-center h-screen">
        <GridLoader color="teal" size={20} loading={loading} />
    </div>
      ) : (
        images.length > 0 ? (
          <div className="flex justify-center items-center">
            <div className="max-w-7xl mx-auto grid grid-cols-3 gap-4">
              {images.map((imageUrl, index) => (
                <div className="border border-gray-500 p-2 shadow-md shadow-gray-400 hover:animate-pulse">
                  <img src={imageUrl} alt="Unsplash" className="w-56 h-52" />
                  <p className="text-teal-500 text-center font-bold">Image - {index+1}</p>
                  </div>
              ))}
            </div>
          </div>
        ) : (
          <p>{error ? error : 'Loading images...'}</p>
        )
      )}
        

      <Outlet />
    </div>
  );
}

export default Photos;
