import React from "react";
import './project_card.css'

function Project_Card(props) {

    return(
        <>
            <div className="project-card-container">
                <div className="projectcard-text-section">
                    <h3 id="p_name">{props.project_name}</h3>
                    <p id="p_desc">{props.project_description}</p>
                    <a id="p_git" href={props.project_github}>View project on github</a>
                </div>
                <div className="projectcard-image-section">
                    <img id="project-card-image" src={props.image_path}/>
                </div>
            </div>
        </>
    );
}

export default Project_Card;