import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
function Album(){
    return(
        <>
            <div className="flex justify-center items-center  w-screen h-screen bg-black text-teal-500">
                2nd API - Albums
            </div>
            <Outlet/>
        </>
    )
}
export default Album;