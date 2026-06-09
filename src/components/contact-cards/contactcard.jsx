import React from "react"
import { useState } from "react";
import './contact-card.css'

function ContactCard(props){

    const [expanded , setExpanded] = useState(false);
      const handleClick = () => {
            if (!expanded) {
            setExpanded(true);
            } else {
                setExpanded(false);
                window.open(props.link, "_blank");
            }
    };
    return(
        <>

            <div
                className={`contact-card ${expanded ? "expanded" : ""}`}
                onClick={handleClick}
                >
                {/* Icon Circle */}
                <div className="contact-icon">
                    <img src={props.contact_image_path} alt="contact icon" />
                </div>

                {/* Expandable Content */}
                
                <div className="contact-content">
                    <p className="contact-title">{props.contact_title}</p>
                </div>

            </div>
        </>
    );
}


export default ContactCard;