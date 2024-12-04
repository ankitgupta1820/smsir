import React, { useState } from "react";
import "./NavBar.css";

const NavBar = ({ onNavClick }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleMenu = () => {
    console.log("i am here"+ isActive)
    setIsActive(!isActive);
  };

  const handleNavItemClick = (component) => {
    setIsActive(false); // Close menu on item click
    onNavClick(component); // Call parent component function to change active component
  };

  return (
    <div className="header">
      <div className="navbar">
        Smrutiranjan Jena        <div className="navbar-toggle" onClick={toggleMenu}>
          ☰
        </div>
        <nav className={isActive ? "active" : "noactive"}>
          <ul>
            <li>
              <button onClick={() => handleNavItemClick("home")}>Home</button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick("introduction")}>
                About Me
              </button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick("skills")}>
                Skills
              </button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick("myprojects")}>
                Pojects
              </button>
            </li>
            <li>
              <button onClick={() => handleNavItemClick("contact")}>
                Contact Me
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
