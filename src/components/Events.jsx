import React, { useState } from "react";
import "./events.css";

const Events = () => {
  // Separate state for each button
  const [flippedButton1, setFlippedButton1] = useState(false);
  const [flippedButton2, setFlippedButton2] = useState(false);

  // Toggle for button 1
  const handleToggleButton1 = () => {
    setFlippedButton1(!flippedButton1);
  };

  // Toggle for button 2
  const handleToggleButton2 = () => {
    setFlippedButton2(!flippedButton2);
  };

  return (
    <div className="fullscreen-container">
      {/* Heading and Paragraph Section */}
      <div className="heading-top">
        <div className="heading">
          <h1>Events <h3>and</h3> Team Building </h1>
        </div>
        <div className="para">
          <h2>Show enthusiasm! <p>Take a deep breath and say what you came to say.</p></h2>
        </div>
      </div>

      {/* Background image */}
      <img
        className="background-image"
        src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/bba10b11-0144-475c-b46c-6157acce2c76.jpeg"
        alt="background"
      />

      {/* First Button + Text Overlay */}
      <div className="overlay-content">
        <button className="checkbox-label" onClick={handleToggleButton1}>
          <div className={`checkbox-flip ${flippedButton1 ? "flipped" : ""}`}>
            <div className="checkbox-front">+</div>
            <div className="checkbox-back">✓</div>
          </div>
        </button>
        {flippedButton1 && (
          <div className="toggle-text">
            <p>This is the revealed text from Button 1!</p>
          </div>
        )}
      </div>

      {/* Second Button + Text Overlay */}
      {/* <div className="overlay-content">
        <button className="checkbox-label" onClick={handleToggleButton2}>
          <div className={`checkbox-flip ${flippedButton2 ? "flipped" : ""}`}>
            <div className="checkbox-front">+</div>
            <div className="checkbox-back">✓</div>
          </div>
        </button>
        {flippedButton2 && (
          <div className="toggle-text">
            <p>This is the revealed text from Button 2!</p>
          </div>
        )}
      </div> */}
    </div>
  );
};

export default Events;
