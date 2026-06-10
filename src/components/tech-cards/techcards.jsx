import React from "react";
import './techcards.css'

function Techcard(props){

    const isMobile = window.innerWidth <= 600;
    return(
    
    <>
        <div className="tech-card">
            <div className="tech-section" id="section-one">
                <img className="tech_logo"src={props.tech_logo_one}></img>
                <p className="tech_name">{props.tech_name_one}</p>
            </div>
            <div className="tech-section" id="section-two">
                <img className="tech_logo" src={props.tech_logo_two}></img>
                <p className="tech_name">{props.tech_name_two}</p>
            </div>
            <div className="tech-section" id="section-three">
                <img className="tech_logo" src={props.tech_logo_three}></img>
                <p className="tech_name">{props.tech_name_three}</p>
            </div>
        </div>
        
    </>
);
}

export default Techcard;