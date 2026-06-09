import React, { useState ,useEffect } from "react";
import './about.css'
import ContactCard from "../../components/contact-cards/contactcard";
import Techcard from "../../components/tech-cards/techcards.jsx";

function Aboutpage() {

    const [current , setCurrent] = useState(0);
    
    
    const contacts = [
        {
            id:1,
            contact_image_path: 'src/assets/gmail.png',
            contact_title: 'Gmail',
            value:'muhammadhaideraliua@gmail.com',
            link:'mailto:muhammadhaideraliua@gmail.com'
        },
        {
            id:2,
            contact_image_path: 'src/assets/linkedin.png',
            contact_title: 'Linkedin',
            value:'linkedin.com/in/haider-ali-35b72b304/',
            link:'https://www.linkedin.com/in/haider-ali-35b72b304/'
        },
        {   
            id:3, 
            contact_image_path: 'src/assets/X.png',
            contact_title: 'X',
            contact_link:''
        },
        {
            id:4, 
            contact_image_path: 'src/assets/github.png',
            contact_title: 'Github',
            value:'github.com/HaiderAliqnt',
            link:'https://github.com/HaiderAliqnt'
        }
        
    ]

    const tech = [
        {
            tech_logo_one:'src/assets/react.png',
            tech_name_one:'React',
            tech_logo_two:'src/assets/express.png',
            tech_name_two:'Express',
            tech_logo_three:'src/assets/node.png',
            tech_name_three:'Node'

        },
        {
            tech_logo_one:'src/assets/pgsql.png',
            tech_name_one:'PGSql',
            tech_logo_two:'src/assets/docker.png',
            tech_name_two:'Docker',
            tech_logo_three:'src/assets/git.png',
            tech_name_three:'Git'

        },
    
        {
            tech_logo_one:'src/assets/linux.png',
            tech_name_one:'Linux',
            tech_logo_two:'src/assets/cpp.png',
            tech_name_two:'C++',
            tech_logo_three:'src/assets/python.png',
            tech_name_three:'Python'
        }
    ]
    const nextTechnology = () => {
        setCurrent((prev) => (prev + 1) % tech.length);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            nextTechnology();
        }, 2000); 

        return () => {
            clearInterval(interval);
        };
    }, []);



    return (
        <>
            <div className="about-screen-container">
                <div className="personal-description">
                    <div className="about-text-section">
                        <span className="description">
                            "I'm a freelance developer based in Karachi, helping businesses build secure, impactful systems that scale with their growth.
                        </span>

                    </div>
                    <div className="about-techcard-container">
                        <span className="techcard-description">
                            My tools of trade:
                        </span>
                        <Techcard {...tech[current]}/>
                    </div>


                </div>
                <div className="tech-stack-section">
                    <div className="tech-stack-section-top"> 
                        <div className="about-image-section">
                            <div className="polaroid-box">
                                <div className="image-box">
                                    <img src="src/pages/about/pfp.png"></img>
                                </div>
                                <div className="text-box">
                                    LITERALLY ME 
                                </div>
                            </div>
                            <div className="image-descriptive-text-section">
                                <span className="image-desc-text">"I hope the systems I build create opportunities for others</span>   
                                <span className="image-desc-subnote">~Haider Ali</span> 
                            </div>
                        </div>
                    </div>  
                    <div className="tech-stack-section-bottom"> 
                        <div className="about-contact-section">
                            <div className="contact-cards-container">
                                    {contacts.map((contact )=>{
                                        return <ContactCard key={contact.id} {...contact}/>
                                    })}
                            </div>
                            <div className="contact-text-section">
                                <span id="contact-text">Lets make an impact together..</span>
                            </div>
                        </div>
                    </div>
                
                </div>
            </div>
        </>
    );
}

export default Aboutpage;