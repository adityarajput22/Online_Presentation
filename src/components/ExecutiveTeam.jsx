import React from "react";
import "./executiveteam.css";

const ExecutiveTeam = () => {
  return (
    <>
      <div className="team-container">
        <h1 className="team-heading">Executive Team</h1>

        <div className="team-row">
          <div className="team-card">
            <div className="team-image-wrapper">
              <img
                src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/ddd93d3e-e36d-46ae-aa6b-34d080449d19.jpeg"
                alt="Team Member"
                className="team-image"
              />
            </div>
            <span className="team-title">Name</span>
            <p className="team-description">
              To manage a team, you have to listen.
            </p>
            <div className="team-socials">
              <a href="https://github.com/">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <button className="team-button">Resume</button>
          </div>

          <div className="team-card">
            <div className="team-image-wrapper">
              <img
                src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/08dccf6d-6cd7-45a0-9c3f-c5a750ae2347.jpeg"
                alt="Team Member"
                className="team-image"
              />
            </div>
            <span className="team-title">Name</span>
            <p className="team-description">
              Involve them in the different objectives.
            </p>
            <div className="team-socials">
              <a href="https://github.com/">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <button className="team-button">Resume</button>
          </div>

          <div className="team-card">
            <div className="team-image-wrapper">
              <img
                src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/3ee98911-f86b-4268-851a-d88a0b124627.jpeg"
                alt="Team Member"
                className="team-image"
              />
            </div>
            <span className="team-title">Name</span>
            <p className="team-description">
              Help them become better so that your team can help you.
            </p>
            <div className="team-socials">
              <a href="https://github.com/">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/">
                <i className="bi bi-youtube"></i>
              </a>
            </div>
            <button className="team-button">Resume</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveTeam;
