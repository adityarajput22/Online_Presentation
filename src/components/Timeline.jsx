import React from "react";
import "./Timeline.css";

const timelineData = [
  {
    title: "20XX",
    description: "Generate experiences with your content.",
    extra: "This is when everything started!",
  },
  {
    title: "20XX",
    description: "Measure results and experiment.",
    extra: "All the tasks and schedules were set.",
  },
  {
    title: "20XX",
    description: "Measure results and experiment.",
    extra: "Coding and building features in full swing.",
  },
  {
    title: "20XX",
    description: "Activate and amaze your audience.",
    extra: "Ensured quality and user satisfaction.",
  },
  {
    title: "20XX",
    description: "Make your audience remember the message.",
    extra: "The product went live and users joined.",
  },
];

const Timeline = () => {
  return (
    <div className="timeline-container">
      <h2 className="timeline-heading">Project Timeline</h2>
      <div className="timeline">
        {timelineData.map((item, idx) => (
          <div className={`timeline-item ${idx % 2 === 0 ? "left" : "right"}`} key={idx}>
            <div className="bookmark-icon" aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="36"
                viewBox="0 0 24 36"
                fill="#3498db"
              >
                <path d="M6 0C4.89543 0 4 0.89543 4 2V34L12 28L20 34V2C20 0.89543 19.1046 0 18 0H6Z" />
              </svg>
            </div>
            <div className="timeline-content">
              {/* <span className="timeline-date">{item.title}</span> */}
              <h1>{item.title}</h1>
              <p>{item.description}</p>
              <div className="extra-hover-text">{item.extra}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
