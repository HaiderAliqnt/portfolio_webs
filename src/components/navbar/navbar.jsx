import React from "react";
import { useRef , useEffect} from "react";
import './navbar.css'
import { useLocation, useNavigate } from "react-router-dom";
import gsap from "gsap";



function Navbar(){
    
    const navigate = useNavigate();

    const location = useLocation();

    const navRef = useRef(null);
    useEffect(() => {
        gsap.fromTo(navRef.current,
            { opacity: 0, y: -20 },
            { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
        );
    }, []);

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
        navigate('/resume')
    }


    
    
    return(
        <>
            <div className="navbar-container" ref={navRef} style={{ opacity: 0 }}>
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