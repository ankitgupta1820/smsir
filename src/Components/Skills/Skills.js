import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="skills-container">
      <h2  className="Skillsh2">Skills</h2>

      <section className="skills-section">
        <h3 className="Skillsh3">Technical Skills</h3>
        <ul>
          <li>
            <strong>Programming Languages:</strong> JavaScript, PHP, Java, C, C++
          </li>
          <li>
            <strong>Testing Framework:</strong> Rest Assured, Selenium, Jmeter
          </li>
          <li>
            <strong>Database Management:</strong> MySQL, MongoDB
          </li>
          <li>
            <strong>Tools & Platforms:</strong> GitLab, Jenkins, Elasticsearch, Jira
          </li>
          <li>
            <strong>Design & UX/UI:</strong> Figma
          </li>
          <li>
            <strong>Microsoft:</strong> Word, Excel, PPT, Access
          </li>
        </ul>
      </section>

      <section className="skills-section">
        <h3  className="Skillsh3">Soft Skills</h3>
        <ul className="soft-skills-list">
          <li>Problem-Solving</li>
          <li>Team Collaboration</li>
          <li>Time Management</li>
          <li>Adaptability</li>
          <li>Communication</li>
          <li>Good Observations</li>
          <li>Multitasking</li>
        </ul>
      </section>
    </div>
  );
};

export default Skills;
