import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Component/Navbar/Navbar";
function MainLayout(){
    return(
        <>
            <Navbar/>
            <Outlet/>
        </>
    )
}
export default MainLayout;