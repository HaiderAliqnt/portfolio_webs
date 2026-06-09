import React from "react";
import './navbar.css'
import { useLocation, useNavigate } from "react-router-dom";




function Navbar(){
    
    const navigate = useNavigate();

    const location = useLocation();

    const isActive = (path)=>{
        return location.pathname === path 
    }
    const navbtnhome = ()=>{
        navigate('/');
    }

    const navbtnabout = ()=>{
        navigate('/about');
    }

    const navbtnproj = ()=>{
        navigate('/projects')
    }

    const navbtnres = ()=>{

    }


    
    
    return(
        <>
            <div className="navbar-container">
                <div className="navbar">
                    <div className="nav-tag" id="home">
                        <button className={isActive('/') ? 'navbtnactive' : 'navbtn' } id="home-navbtn"
                            onClick={navbtnhome}
                            
                        >Home</button>
                    </div>
                    <div className="nav-tag" id="about">
                        <button className={isActive('/about') ? 'navbtnactive' : 'navbtn' }  id="about-navbtn"
                            
                            onClick={navbtnabout}   
                        
                        >About</button>
                    </div>
                    <div className="nav-tag" id="projects">
                        <button  className={isActive('/projects') ? 'navbtnactive' : 'navbtn' }  id="projects-navbtn"
                            onClick={navbtnproj}
                        >Projects</button>
                    </div>
                    <div className="nav-tag" id="resume">
                        <button  className={isActive('/resume') ? 'navbtnactive' : 'navbtn' }   id="resume-navbtn"
                            onClick={navbtnres}
                        >Resume</button>
                    </div>
                </div>
            </div>
        </>
    );
} 

export default Navbar;