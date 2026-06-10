import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "./resume.css";

function Resume() {
    const containerRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(containerRef.current,
            { opacity: 0, y: 40 },
            { opacity: 1, y: 0, duration: 0.9, ease: "power3.out" }
        );
    }, []);

    const handleDownload = () => {
        const link = document.createElement("a");
        link.href = "src/assets/resume.pdf";
        link.download = "Muhammad_Haider_Ali_Resume.pdf";
        link.click();
    };

    return (
        <div className="resume-page" ref={containerRef}>
            <div className="resume-wrapper">

                {/* Header */}
                <div className="resume-header">
                    <h1 className="resume-name">Muhammad Haider Ali</h1>
                    <div className="resume-contacts">
                        <a href="tel:+923171022259">+92-317-1022259</a>
                        <span className="dot">·</span>
                        <a href="mailto:muhammadhaideraliua@gmail.com">muhammadhaideraliua@gmail.com</a>
                        <span className="dot">·</span>
                        <a href="https://www.linkedin.com/in/haider-ali-35b72b304/" target="_blank" rel="noreferrer">LinkedIn</a>
                        <span className="dot">·</span>
                        <a href="https://github.com/HaiderAliqnt" target="_blank" rel="noreferrer">GitHub</a>
                    </div>
                </div>

                {/* Education */}
                <section className="resume-section">
                    <h2 className="section-title">Education</h2>
                    <div className="section-divider" />
                    <div className="edu-row">
                        <div>
                            <p className="edu-school">Ghulam Ishaq Khan Institute of Engineering Sciences and Technology, Pakistan</p>
                            <p className="edu-degree">Bachelor of Science in Computer Science</p>
                        </div>
                        <span className="date-tag">2024 — Present</span>
                    </div>
                </section>

                {/* Experience */}
                <section className="resume-section">
                    <h2 className="section-title">Experience</h2>
                    <div className="section-divider" />
                    <div className="timeline">

                        <div className="timeline-item">
                            <div className="timeline-node">
                                <div className="node-dot" />
                                {/* <div className="node-line" /> */}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="job-title">Automation Engineer — Team Swift</span>
                                    <span className="date-tag">May 2024 — Apr 2026</span>
                                </div>
                                <ul className="timeline-bullets">
                                    <li>Fine-tuned YOLO-based object detection models on a 500+ image UAV dataset, achieving reliable real-time aerial target detection.</li>
                                    <li>Derived and implemented a geometric localization algorithm using UAV telemetry data (altitude, gimbal angle, GPS) to compute real-world target coordinates from aerial footage.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item">
                            <div className="timeline-node">
                                <div className="node-dot" />
                                {/* <div className="node-line" /> */}
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="job-title">Freelance Full-Stack Developer — SLMarket</span>
                                    <span className="date-tag">2024</span>
                                </div>
                                <ul className="timeline-bullets">
                                    <li>Developed and deployed a full-stack e-commerce platform for a Gen Z streetwear brand, handling real client requirements and a production launch.</li>
                                    <li>Built a role-based admin dashboard for product and inventory management with end-to-end order processing and user authentication using Node.js, Express.js, and PostgreSQL.</li>
                                </ul>
                            </div>
                        </div>

                        <div className="timeline-item last">
                            <div className="timeline-node">
                                <div className="node-dot" />
                            </div>
                            <div className="timeline-content">
                                <div className="timeline-header">
                                    <span className="job-title">Software Development Intern — Optome</span>
                                    <span className="date-tag">Jun 2025 — Aug 2025</span>
                                </div>
                                <ul className="timeline-bullets">
                                    <li>Built a web-based customer support chatbot integrating AI-driven chat, automated FAQ resolution, and a complaint ticketing pipeline.</li>
                                    <li>Designed a multi-mode response engine routing queries to AI chat, FAQ lookup, or ticket creation based on intent; integrated a JavaScript/HTML/CSS frontend with a PHP backend.</li>
                                </ul>
                            </div>
                        </div>

                    </div>
                </section>

                {/* Projects */}
                <section className="resume-section">
                    <h2 className="section-title">Projects</h2>
                    <div className="section-divider" />

                    <div className="project-entry">
                        <div className="project-entry-header">
                            <span className="project-entry-name">GIKGO — Campus Delivery Platform</span>
                            <a href="https://github.com/HaiderAliqnt/Delivery-Service" className="github-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                        </div>
                        <ul className="project-bullets">
                            <li>Built a full-stack campus delivery platform (PERN) with dual-role authentication, allowing students to switch between customer and deliverer roles within a single account.</li>
                            <li>Designed a normalized PostgreSQL schema with role-based access, location-aware deliverer availability, and a full order lifecycle backed by transactional integrity.</li>
                            <li>Implemented real-time availability broadcasting via WebSockets and a gamified XP-based ranking system to incentivize deliverer performance.</li>
                        </ul>
                    </div>

                    <div className="project-entry">
                        <div className="project-entry-header">
                            <span className="project-entry-name">Divido — Campus Expense Splitting App</span>
                            <a href="https://github.com/HaiderAliqnt/Divido" className="github-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                        </div>
                        <ul className="project-bullets">
                            <li>Built a full-stack expense-splitting app (PERN) supporting group creation, shared expense logging, and real-time balance settlement.</li>
                            <li>Designed normalized PostgreSQL schemas and RESTful APIs with JWT-based authentication to handle multi-user group sessions securely.</li>
                        </ul>
                    </div>

                    <div className="project-entry">
                        <div className="project-entry-header">
                            <span className="project-entry-name">JWT Security Auditor — CLI Tool</span>
                            <a href="https://github.com/HaiderAliqnt/JWT_Auth/" className="github-link" target="_blank" rel="noreferrer">GitHub ↗</a>
                        </div>
                        <ul className="project-bullets">
                            <li>Built a Python CLI tool that audits JWTs for algorithm confusion attacks, weak secret brute-forcing via dictionary attack, missing expiry claims, and sensitive payload exposure.</li>
                            <li>Implemented HS256 secret cracking using HMAC-SHA256 against common wordlists without external cryptography dependencies.</li>
                        </ul>
                    </div>
                </section>

                {/* Skills */}
                <section className="resume-section">
                    <h2 className="section-title">Technical Skills</h2>
                    <div className="section-divider" />
                    <div className="skills-grid">
                        <div className="skill-row"><span className="skill-label">Languages</span><span className="skill-value">C++, Python, JavaScript, PHP, RISC-V Assembly</span></div>
                        <div className="skill-row"><span className="skill-label">Frameworks</span><span className="skill-value">Node.js, Express.js, React.js, Docker, Git</span></div>
                        <div className="skill-row"><span className="skill-label">Databases</span><span className="skill-value">PostgreSQL</span></div>
                        <div className="skill-row"><span className="skill-label">Tools</span><span className="skill-value">REST APIs, YOLO, Linux, Wireshark, Burp Suite</span></div>
                    </div>
                </section>

                {/* Download Button */}
                <div className="resume-download-row">
                    <button className="download-btn" onClick={handleDownload}>
                        Download Resume ↓
                    </button>
                </div>

            </div>
        </div>
    );
}

export default Resume;