import React, { useState, useEffect } from "react";
import "./Project.css";

const Project = ({ name, category, languages, description, codeLink, videoLink }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsSmallScreen(window.innerWidth < 768);

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleReadMore = () => setIsReadMore(!isReadMore);

  return (
    <div className="griditem">
      <h3>{name}</h3>
      <h5>{category}</h5>
      <div className="project-details">
        <ul className="tags">
          {languages.map((language, index) => (
            <li key={index} className="tag">{language}</li>
          ))}
        </ul>
        <div className={`description-container ${isReadMore && !isSmallScreen ? 'collapsed' : 'expanded'}`}>
          <p>{description}</p>
        </div>
        {!isSmallScreen && description.length > 100 && (
          <a href="#!" onClick={toggleReadMore}>
            {isReadMore ? "...Read More" : " Show Less"}
          </a>
        )}
        {codeLink || videoLink ? (
          <div className="project-links">
            {codeLink && (
              <button>
                <a href={codeLink} target="_blank" rel="noopener noreferrer">Code</a>
              </button>
            )}
            {videoLink && (
              <button>
                <a href={videoLink} target="_blank" rel="noopener noreferrer">Video</a>
              </button>
            )}
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Project;
