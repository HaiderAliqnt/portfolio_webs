import React from "react";
import { Router } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/navbar";

function Layout(){
    return (
        <>  
            <Navbar/>
            <Outlet/>
        </>
    );
}

export default Layout;