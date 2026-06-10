import React, { useState ,useEffect ,useRef } from "react";
import './about.css'
import ContactCard from "../../components/contact-cards/contactcard";
import Techcard from "../../components/tech-cards/techcards.jsx";
import gsap from "gsap";
function Aboutpage() {

    const [current , setCurrent] = useState(0);
    const descRef = useRef(null);
    const polaroidRef = useRef(null);
    const quoteRef = useRef(null);
    const contactRef = useRef(null);
    const techRef = useRef(null);
    const contactDescRef = useRef(null); 
    
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


    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        tl.to(descRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.3 })
        .to(polaroidRef.current, { opacity: 1, x: 0, rotation: -20, duration: 1, ease: "back.out(1.4)" }, "-=0.5")
        .to(quoteRef.current, { opacity: 1, x: 0, rotation: 20, duration: 1, ease: "back.out(1.4)" }, "-=0.7")
        .to(gsap.utils.toArray(contactRef.current.children), {
            opacity: 1, y: 0, duration: 0.5, stagger: 0.15, ease: "bounce.out"
            }, "-=0.3")
        .to(contactDescRef.current, { opacity: 1, y: 0, duration: 1, delay: 0.3 });
    }, []);

    const nextTechnology = () => {
        if (!techRef.current) return;

        gsap.to(techRef.current, {
            opacity: 0,
            x: -60,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setCurrent((prev) => (prev + 1) % tech.length)
        });
    };
    
    useEffect(() => {
    if (!techRef.current) return;

    gsap.fromTo(
        techRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
    );
    }, [current]);
    useEffect(() => {
        const interval = setInterval(nextTechnology, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <div className="about-screen-container">
                <div className="personal-description">
                    <div className="about-text-section">
                        <span className="description" ref={descRef} style={{ opacity: 0 }}>
                            "I'm a freelance developer based in Karachi, helping businesses build secure, impactful systems that scale with their growth.
                        </span>

                    </div>
                    <div className="about-techcard-container">
                        <span className="techcard-description">
                            My tools of trade:
                        </span>
                        <div ref={techRef } style={{ height:'100%' , width: "100%" ,  opacity: 0 }}>
                            < Techcard {...tech[current]} />
                        </div>
                    </div>


                </div>
                <div className="tech-stack-section">
                    <div className="tech-stack-section-top"> 
                        <div className="about-image-section">
                            <div className="polaroid-box" ref={polaroidRef} style={{ opacity: 0 }}>
                                <div className="image-box">
                                    <img src="src/pages/about/pfp.png"></img>
                                </div>
                                <div className="text-box">
                                    LITERALLY ME 
                                </div>
                            </div>
                            <div className="image-descriptive-text-section" ref={quoteRef} style={{ opacity: 0 }}>
                                <span className="image-desc-text">"I hope the systems I build create opportunities for others</span>   
                                <span className="image-desc-subnote">~Haider Ali</span> 
                            </div>
                        </div>
                    </div>  
                    <div className="tech-stack-section-bottom"> 
                        <div className="about-contact-section">
                            <div className="contact-cards-container" ref={contactRef}>
                                    {contacts.map((contact )=>{
                                        return <ContactCard key={contact.id} {...contact}/>
                                    })}
                            </div>
                            <div className="contact-text-section" ref={contactDescRef} style={{ opacity: 0 }}>
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