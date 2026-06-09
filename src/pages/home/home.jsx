import React from "react";
import { useState } from "react";
import { DotBackground} from "../../components/background/background.jsx";
import "./home.css"
import { Link , NavLink , useNavigate } from "react-router-dom";

function Homepage() {
  
  const navigate = useNavigate(); 

  const handleWorkBtn = ()=>{
    navigate('/projects')
  } 

  const handleAboutBtn = ()=>{
    navigate('/about')
  }
  
  
  
  return (
    <>
      <div className="screen-container">
        
        <div className="home-text-section">
          <div className="text-title">
            <p className="tag-line">HELLO , I AM </p>
            <p className="tag-line" id="name">HAIDER ALI</p>
          </div>
          <div className="dynamic-text">
            <p className="dyn-txt" id="static">I AM A </p>
            <p className="dyn-txt" id="dynamic">WEB DEVELOPER</p>
          </div>

          <div className="text-buttons">
            <button className="nav-btn" id="Projects" onClick={handleWorkBtn}>View my Work</button>
            <button className="nav-btn" id="Blog" onClick={handleAboutBtn}>About Me</button>
            <button className="nav-btn" id="Resume">View my Resume</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage