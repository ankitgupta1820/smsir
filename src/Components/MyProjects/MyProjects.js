import React from "react";
import Project from "../Project/Project";
import "./MyProjects.css";

const MyProjects = () => {
  const projects = [
    {
      name: "Snapdeal Supply Chain Management (SCM)",
      category: "Testing",
      languages: ["Postman", "Jira", "JavaScript", "MySQL"],
      description: "Contributed to Snapdeal's Supply Chain Management system by designing test cases and performing extensive smoke, functional, and regression testing. Ensured seamless procurement, inventory tracking, order management, and distribution by utilizing tools like Postman and Jira in an Agile Scrum environment.",
      // codeLink: "https://github.com/SmrutiranjanJena/Snapdeal-SCM",
      // videoLink: "https://youtu.be/SnapdealSCMDemo",
    },
    
    {
      name: "Selltm Mobile Application",
      category: "Testing",
      languages: ["Android", "MySQL", "Postman", "Jira"],
      description: "Tested the Selltm mobile application, ensuring compatibility and functionality across Android devices. Designed test cases for features like flight booking, DTH recharges, and reward systems. Executed usability, regression, and UAT testing to ensure smooth user experiences and bug-free operations.",
      // codeLink: "https://github.com/SmrutiranjanJena/Selltm-App",
      // videoLink: "https://youtu.be/SelltmMobileAppDemo",
    },
    
    {
      name: "Delhi Transport Corporation (DTC ITS)",
      category: "Testing",
      languages: ["PHP", "JavaScript", "MySQL"],
      description: "Validated the transport management system for DTC, covering features like route scheduling, vehicle tracking, and passenger information. Designed and executed test cases using black-box techniques and conducted regression, smoke, and security testing in an Agile environment.",
      // codeLink: "https://github.com/SmrutiranjanJena/DTC-ITS",
      // videoLink: "https://youtu.be/DTCTestDemo",
    },
    
    // {
    //   name: "MSRTC/ST Application",
    //   category: "Testing",
    //   languages: ["PHP", "JavaScript", "MySQL"],
    //   description: "Performed end-to-end testing for the MSRTC transport application, including bus depot modules and ticket booking features. Tested ETIM (Electronic Ticketing Machine) functionality and integrated modules like public portals and mobile apps.",
    //   codeLink: "https://github.com/SmrutiranjanJena/MSRTC-ST",
    //   videoLink: "https://youtu.be/MSRTCTestDemo",
    // },
    
    // {
    //   name: "ERP for Manufacturing",
    //   category: "Testing",
    //   languages: ["PHP", "MySQL", "JavaScript"],
    //   description: "Conducted testing for a customized ERP system used by manufacturing industries. Tested modules like HR, accounting, transport, and inventory management while ensuring smooth functionality and scalability across the application.",
    //   codeLink: "https://github.com/SmrutiranjanJena/ERP-Testing",
    //   videoLink: "https://youtu.be/ERPTestDemo",
    // },
    
    // Add more project objects as needed
  ];

  return (
    <div className="main">
      <h2 className="myprojectsh2"> My Projects</h2>
      <div className="angry-grid">
        {projects.map((project, index) => (
          <Project
            key={index}
            name={project.name}
            category={project.category}
            languages={project.languages}
            description={project.description}
            codeLink={project.codeLink}
            videoLink={project.videoLink}
          />
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
