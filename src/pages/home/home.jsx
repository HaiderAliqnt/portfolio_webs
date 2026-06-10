import React from "react";
import { useState ,useEffect , useRef } from "react";
import { DotBackground} from "../../components/background/background.jsx";
import "./home.css"
import { Link , NavLink , useNavigate } from "react-router-dom";
import { gsap } from "gsap";

function Homepage() {
  
  const navigate = useNavigate(); 

  const handleWorkBtn = ()=>{
    navigate('/projects')
  } 

  const handleAboutBtn = ()=>{
    navigate('/about')
  }
  const handleResBtn = ()=>{
    navigate('/resume')
  }

  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  const phrases =[
    " A WEB DEVELOPER" ,
    "AN APP DEVELOPER" ,
    "AN ETHICAL HACKER" ,
  ];

  useEffect(() => {

    if (!containerRef.current || !textRef.current || !buttonRef.current) return;

    const tl = gsap.timeline();

    tl.fromTo(containerRef.current, 
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, ease: "power3.out" }
    )
    .fromTo(textRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
    , "-=0.5")
    .fromTo(gsap.utils.toArray(buttonRef.current.children),
      { y: 20, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.5, stagger: 0.15, ease: "power2.out" }
    );

  }, []);





  useEffect(() => {
  const currentPhrase = phrases[currentPhraseIndex];

  const timeout = setTimeout(() => {
    if (!isDeleting) {
      const newText = currentPhrase.slice(0, displayedText.length + 1);
      setDisplayedText(newText);

      if (newText === currentPhrase) {
        setTimeout(() => setIsDeleting(true), 1500);
      }
    } else {
      const newText = currentPhrase.slice(0, displayedText.length - 1);
      setDisplayedText(newText);

      if (newText === "") {
        setIsDeleting(false);
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
      }
    }
  }, isDeleting ? 100 : 200);

  return () => clearTimeout(timeout);
}, [displayedText, isDeleting, currentPhraseIndex]);

  
  
  
  return (
    <>
      <div className="screen-container" ref={containerRef} >
        
        <div className="home-text-section"  ref={textRef} >
          <div className="text-title">
            <p className="tag-line">HELLO , I AM </p>
            <p className="tag-line" id="name">HAIDER ALI</p>
          </div>
          <div className="dynamic-text">
            <p className="dyn-txt" id="static">I AM </p>
            <p className="dyn-txt" id="dynamic">{displayedText}
              <span className="cursor">|</span>
            </p>
          </div>

          <div className="text-buttons" ref={buttonRef} >
            <button className="nav-btn" id="Projects" onClick={handleWorkBtn}>View my Work</button>
            <button className="nav-btn" id="Blog" onClick={handleAboutBtn}>Get in Touch</button>
            <button className="nav-btn" id="Resume" onClick={handleResBtn}>View my Resume</button>
          </div>
        </div>

      </div>
    </>
  );
}

export default Homepage