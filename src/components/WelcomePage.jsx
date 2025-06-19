import React from "react";
import "./welcomepage.css";

const WelcomePage = () => {
  return (
    <div className="welcome-page">
      <div className="blob-background"></div>

      <div className="content-wrapper">
        <div className="image-container">
          <img
            src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/a409da54-0987-47ba-8e87-cf99c6b27eba.jpeg"
            alt="Person 1"
            className="portrait portrait1"
          />
          <img
            src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/250d9ec8-bac5-4335-ac30-a813fc65684c.jpeg"
            alt="Person 2"
            className="portrait portrait2"
          />
        </div>

        <div className="text-content">
          <h1 className="welcome-title">Welcome</h1>
          <h2 className="welcome-subtitle">to the team !!</h2>
          <div className="welcome-mintitle">
            <h2>Provide context for your topic with a subtitle</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
