import React, { useState , useRef, useEffect } from "react";
import './projects.css';
import Project_Card from "../../components/project_card/project_card";
import gsap from "gsap";
function Projectpage() {
    
    const [current , setCurrent] = useState(0);
    const HeadingtextRef = useRef(null);
    const desctextRef = useRef(null);
    const imageRef = useRef(null);
    const carouselRef = useRef(null);
    const containerRef = useRef(null);

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

    useEffect(() => {
        if (!carouselRef.current) return;
        gsap.fromTo(
            carouselRef.current,
            { opacity: 0, x: 60 },
            { opacity: 1, x: 0, duration: 0.5, ease: "power2.out" }
        );
    }, [current]);


    const next = () => {
        gsap.to(carouselRef.current, {
            opacity: 0,
            x: -60,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setCurrent((prev) => (prev + 1) % projects.length)
        });
    };

    
    const prev = () => {
        gsap.to(carouselRef.current, {
            opacity: 0,
            x: 60,
            duration: 0.4,
            ease: "power2.in",
            onComplete: () => setCurrent((prev) => (prev - 1 + projects.length) % projects.length)
        });
    };
    
    useEffect(()=>{
        const t1 = gsap.timeline({defaults:{ease:"power3.out"}});

        t1.fromTo(containerRef.current, 
            { y: -100, opacity: 0 },
            { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
            )
        t1.fromTo(HeadingtextRef.current,
            { y: 30, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
            , "-=0.5")

    },[])


    
    
    return (
        <>
            
            
            <div className="project-screen-container" ref={containerRef}>

                <div className="project-text-section" ref={HeadingtextRef}>
                    <h2>What I've Been Building</h2>
                </div>

                <div className="project-showcase-box" >
                    <button className="project-btn" id ="prev" onClick={prev}>&#8592;</button>
                    <div ref={carouselRef } style={{ height:'100%' , width: "100%" }}>
                        <Project_Card {...projects[current]} />
                    </div>
                    <button className='project-btn' id="next" onClick={next}> &#8594; </button>
                </div>
            </div>
            

        </>
    );
}

export default Projectpage;