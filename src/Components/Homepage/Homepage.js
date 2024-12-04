import React, { useState, useEffect } from "react";
import "./Homepage.css"; // Ensure this has the appropriate styles
import AbrarImage from "./smsir.jfif"; // Import the image
import CV from "./smsir.pdf"; // Import the CV PDF
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faEnvelope,
  faPhone,
  faDownload,
  faCopy,
} from "@fortawesome/free-solid-svg-icons";

const Homepage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const jobTitles = ["Senior Software Test Engineer"];

  useEffect(() => {
    const updateJobTitle = () => {
      setJobTitle(jobTitles[currentIndex]);
      setTimeout(() => {
        // Move to the next job title
        setCurrentIndex((prevIndex) => (prevIndex + 1) % jobTitles.length);
      }, 2000); // Display each title for 2 seconds
    };

    updateJobTitle(); // Start updating job titles

    // Cleanup function to clear timeout
    return () => clearTimeout();
  }, [currentIndex]); // Depend on currentIndex

  const downloadCV = () => {
    const link = document.createElement("a");
    link.href = CV;
    link.download = "Smrutiranjan Jena Cv.pdf";
    link.click();
  };

  const copyEmail = () => {
    const email = "smrutiranjanjena2705@gmail.com";
    navigator.clipboard.writeText(email).then(() => {
      alert("Email address copied to clipboard");
    });
  };

  return (
    <div className="main infocontainor">
      <div className="devinfo">
        <div className="hello">Hi I am</div>
        <div className="name">Smrutiranjan Jena</div>
        <br />
        <div className="about">{jobTitle}</div>
        <div className="moreabout">
          <br />
          I am Smrutiranjan Jena, an experienced IT professional with over 5
          years in manual and API testing across diverse domains like
          e-commerce, transport, and ERP applications.
          <br />
          <br />
          My expertise includes functional testing, SDLC/STLC methodologies, and
          tools like Jira, Postman, and JMeter, ensuring quality software
          solutions." .......
        </div>
        <div className="icon-buttons">
          <a
            href="https://www.linkedin.com/in/smrutiranjan-jena-1b65a6135/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="mailto:smrutiranjanjena2705@gmail.com">
            <FontAwesomeIcon icon={faEnvelope} />
          </a>
          <a href="tel:+91 9986915235">
            <FontAwesomeIcon icon={faPhone} />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </div>

        <div className="buttons">
          <button onClick={downloadCV}>
            <FontAwesomeIcon icon={faDownload} className="icon" /> Download CV
          </button>
          <button onClick={copyEmail}>
            <FontAwesomeIcon icon={faCopy} className="icon" /> Copy Email
            Address
          </button>
        </div>
      </div>
      <div className="devpic">
        <img src={AbrarImage} alt="Abrar Amjad pic here" />
      </div>
    </div>
  );
};

export default Homepage;
