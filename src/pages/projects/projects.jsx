import React, { useState } from "react";
import './projects.css';
import Project_Card from "../../components/project_card/project_card";

function Projectpage() {
    
    const [current , setCurrent] = useState(0);

    
    const projects = [
    
    {
        project_name: "Divido",
        project_description: "Create groups, split bills, send reminders, and track dues effortlessly.",
        project_github: "link",
        image_path:'src/assets/DIVIDO.png',
           
    }, 

    {
        project_name: "GIK GO",
        project_description: "Peer-to-peer logistics solution built for university campuses.",
        project_github: "link",
        image_path:'src/assets/GIKGO.png',
    },
    {
        project_name: "SL Market",
        project_description: "A genz streetwear Ecommerce store with admin panel.",
        github: "link",
        image_path:'src/assets/slmarket.png',
    }
    ]

    const next = ()=>{
        setCurrent((prev)=> (prev + 1)%projects.length );
    }

    const prev = ()=> {
        setCurrent((prev) => (prev - 1 + projects.length)%projects.length)
    }
 

    
    
    return (
        <>
            
            
            <div className="project-screen-container">

                <div className="project-text-section">
                    <h2>What I've Been Building</h2>
                </div>

                <div className="project-showcase-box">
                    <button className="project-btn" id ="prev" onClick={prev}>&#8592;</button>
                    <Project_Card {...projects[current]}/>
                    <button className='project-btn' id="next" onClick={next}> &#8594; </button>
                </div>
            </div>
            

        </>
    );
}

export default Projectpage;