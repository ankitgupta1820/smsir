import React, { useState } from "react";
import NavBar from "./Components/NavBar/NavBar";
import ContactUs from "./Components/ContactUs/ContactUs";
import Homepage from "./Components/Homepage/Homepage";
import Skills from "./Components/Skills/Skills";
import MyProjects from "./Components/MyProjects/MyProjects";
import Introduction from "./Components/Introduction/Introduction";
import "./App.css"; // Import global styles

const App = () => {
  const [activeComponent, setActiveComponent] = useState("home"); // State to manage active component

  const handleNavClick = (component) => {
    setActiveComponent(component);
  };

  // Render different components based on activeComponent state
  const renderComponent = () => {
    switch (activeComponent) {
      case "home":
        return <Homepage />;
      case "introduction":
        return <Introduction />;
      case "skills":
        return <Skills />;
      case "myprojects":
        {
          console.log("case");
        }
        return <MyProjects />;

      case "contact":
        return <ContactUs />;

      default:
        return <Homepage />;
    }
  };

  return (
    <div className="App">
      <NavBar onNavClick={handleNavClick} /> {/* Pass handleNavClick as prop */}
      {renderComponent()}
    </div>
  );
};

export default App;
