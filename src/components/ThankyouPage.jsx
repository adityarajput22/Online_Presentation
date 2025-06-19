import React from "react";
import "./thankyoupage.css";

const ThankyouPage = () => {
  return (
    <>
      <div className="top">
        <div className="thankyou-wrapper">
          {/* Left side - image */}
          <div className="images">
            <img
              src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/5673f6be-e969-4055-a9fb-60358cc2ecec.jpeg"
              alt="image"
            />
          </div>

          {/* Right side - text */}
          <div className="text-wrapper animate-fade-in">
            <div className="heading">
              <h1 id="hka1">Thank</h1>
              <h1 id="hka2">you!</h1>
            </div>

            <div className="sub-heading">
              <h2>Do you need help or do you have any questions?</h2>
            </div>

            <div className="team-socials">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-github"></i>
              </a>
              <a href="https://x.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-twitter"></i>
              </a>
              <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="https://www.youtube.com/" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-youtube"></i>
              </a>
            </div>

            <div className="paragraph">
              <p>
                If your thing is to captivate your audience, connect with your
                target and leave everyone speechless
                <h3>this Genially template is for you.</h3>
              </p>
              
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ThankyouPage;
