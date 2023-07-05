import { useState, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
function Home() {
    const [api, setapi] = useState(0);
    const navigate = useNavigate();
    const handleclick = () => {
        if (api === 1) {
            navigate('/Api1');
        } else if (api === 2) {
            navigate('/Api2');
        } else if (api === 3) {
            navigate('/Api3');
        } else if (api === 4) {
            navigate('/Api4');
        }
    };
    return (
        <>
            <div className="flex flex-col w-screen h-screen bg-black">
                <h1 className=" text-teal-500 font-bold font-sans text-center text-3xl">API Integrator</h1>
                <div className="flex flex-row justify-center items-end w-full h-1/2">
                    <div className="flex flex-col justify-between items-start w-1/3 h-2/3 m-4 border border-teal-500 rounded-md shadow-md shadow-gray-400">
                        <div className="flex flex-col justify-center items-start ml-4 mt-4">
                            <img src="https://c0.wallpaperflare.com/preview/278/663/591/posting-post-computer-icon.jpg" className="rounded-full w-32 h-32 p-1 mb-2 border borer-gray-500" />
                            <p className="text-teal-500 font-bold ml-4">Get Posts API</p>
                        </div>
                        <div className="flex justify-end items-end w-full">
                            <button className=" text-teal-500 border border-teal-500 rounded-md h-10 p-1 mr-6 mb-6 font-bold text-xl hover:bg-teal-500 hover:text-black" onClick={() => { setapi(1); handleclick() }}>
                                Interact
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-col justify-between items-start w-1/3 h-2/3 m-4 border border-teal-500 rounded-md shadow-md shadow-gray-400">
                        <div className="flex flex-col justify-center items-start ml-4 mt-4">
                            <img src="https://cdn.wallpapersafari.com/46/65/YMPUwi.jpg" className="rounded-full w-32 h-32 p-1 mb-2 border borer-gray-500" />
                            <p className="text-teal-500 font-bold ml-4">Get Albums API</p>
                        </div>
                        <div className="flex justify-end items-end w-full">
                            <button className=" text-teal-500 border border-teal-500 rounded-md h-10 p-1 mr-6 mb-6 font-bold text-xl hover:bg-teal-500 hover:text-black" onClick={() => { setapi(2); handleclick() }}>
                                Interact
                            </button>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-center w-full h-1/2">
                <div className="flex flex-col justify-between items-start w-1/3 h-2/3 m-4 border border-teal-500 rounded-md shadow-md shadow-gray-400">
                        <div className="flex flex-col justify-center items-start ml-4 mt-4">
                            <img src="https://i.pinimg.com/originals/7e/36/34/7e3634126e65d76674e590ffe30fe244.jpg" className="rounded-full w-32 h-32 p-1 mb-2 border borer-gray-500" />
                            <p className="text-teal-500 font-bold ml-4">Get Photos API</p>
                        </div>
                        <div className="flex justify-end items-end w-full">
                            <button className=" text-teal-500 border border-teal-500 rounded-md h-10 p-1 mr-6 mb-6 font-bold text-xl hover:bg-teal-500 hover:text-black" onClick={() => { setapi(1); handleclick() }}>
                                Interact
                            </button>
                        </div>
                    </div>
                    <div className="flex flex-col justify-between items-start w-1/3 h-2/3 m-4 border border-teal-500 rounded-md shadow-md shadow-gray-400">
                        <div className="flex flex-col justify-center items-start ml-4 mt-4">
                            <img src="https://t4.ftcdn.net/jpg/04/60/71/01/360_F_460710131_YkD6NsivdyYsHupNvO3Y8MPEwxTAhORh.jpg" className="rounded-full w-32 h-32 p-1 mb-2 border borer-gray-500" />
                            <p className="text-teal-500 font-bold ml-4">Post Content API</p>
                        </div>
                        <div className="flex justify-end items-end w-full">
                            <button className=" text-teal-500 border border-teal-500 rounded-md h-10 p-1 mr-6 mb-6 font-bold text-xl hover:bg-teal-500 hover:text-black" onClick={() => { setapi(1); handleclick() }}>
                                Interact
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Outlet />
        </>

    )
}
export default Home;