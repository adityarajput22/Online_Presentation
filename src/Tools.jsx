import React, { useState } from "react";
import "./Tools.css";

const ToolsSection = () => {
  const [activeCard, setActiveCard] = useState(null);
  const [activeInsideText, setActiveInsideText] = useState(null);

  const cardsData = [
    {
      title: "A great title",
      text: "You can create an outline to synthesize the content and use words that will be etched into the minds of your audience.",
      moreTitle: "Did you Know...",
      moreText:
        "Did you know that 90% of the information we assimilate comes through our sight? Visual resources are very helpful in reinforcing your message.",
      image:
        "https://img.genial.ly/5f4d04bc24f8aa6ccbd06c83/0be01cb9-5608-4921-9936-4b49119c475e.jpeg",
      insideText:
        "We retain 42% more information when the content moves? It is perhaps the most effective resource to capture the attention of your audience.",
    },
    {
      title: "A great title",
      text: "If you are going to present live, we recommend that you train your voice and rehearse: the best improvisation is always the most practiced!",
      moreTitle: "Tips...",
      moreText:
        "Interactivity is the key to capturing the interest and attention of your audience. A Genially is interactive because your audience explores and engages with it.",
      image:
        "https://img.genial.ly/5f4d04bc24f8aa6ccbd06c83/500f5ca6-9e22-47ca-9a7d-055223c9800c.jpeg",
      insideText:
        "We retain 42% more information when the content moves? It is perhaps the most effective resource to capture the attention of your audience.",
    },
    {
      title: "A great title",
      text: "Show enthusiasm, put on a smile, and maintain eye contact with your audience: 'The eyes, chico. They never lie.' Leave them amazed.",
      moreTitle: "Did you Know...",
      moreText:
        "The window allows you to add more extensive content. You can enrich your genially by incorporating PDFs, videos, text... The content of the window will appear when clicking on the interactive element.",
      image:
        "https://img.genial.ly/5f4d04bc24f8aa6ccbd06c83/4df6bd1e-6127-4b07-b8b4-13ae57a2ace5.jpeg",
      insideText:
        "We retain 42% more information when the content moves? It is perhaps the most effective resource to capture the attention of your audience.",
    },
  ];

  const handleCardClick = (index) => {
    setActiveCard(index);
    setActiveInsideText(null);
  };

  const handleClose = () => {
    setActiveCard(null);
    setActiveInsideText(null);
  };

  const toggleInsideText = (index) => {
    setActiveInsideText((prev) => (prev === index ? null : index));
  };

  return (
    <div className="top">
      <div className="heading">
        <h1>Tools</h1>
      </div>

      {activeCard === null && (
        <div className="main_cards">
          {cardsData.map((card, index) => (
            <div className="card" key={index}>
              <div>
                <h1 className="card-heading">{card.title}</h1>
                <p className="card-text">{card.text}</p>
              </div>
              <button
                className="card-button"
                onClick={() => handleCardClick(index)}
              >
                <p>Learn More</p>
                <svg
                  className="card-icon"
                  stroke="currentColor"
                  strokeWidth={1}
                  viewBox="0 0 24 24"
                  fill="white"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
                    strokeLinejoin="round"
                    strokeLinecap="round"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      )}

      {activeCard !== null && (
        <div className="add_more">
          <div className="add_more-content">
            <h1>{cardsData[activeCard].moreTitle}</h1>
            <p>{cardsData[activeCard].moreText}</p>
          </div>
          <img
            src={cardsData[activeCard].image}
            alt="Extra info"
            className="add_more-image"
          />
          <button className="cross_button" onClick={handleClose}>
            ❌
          </button>
          <button
            className="added_button"
            onClick={() => toggleInsideText(activeCard)}
          >
            ➕
          </button>

          {activeInsideText === activeCard && (
            <div className="inside-text-overlay">
              <div className="inside-text-box">
                <p>{cardsData[activeCard].insideText}</p>
                <button
                  onClick={() => setActiveInsideText(null)}
                  className="close-inside"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ToolsSection;

