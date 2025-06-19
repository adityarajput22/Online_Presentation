import React, { useState } from "react";
import "./indexes.css";
import WelcomePage from "./WelcomePage.jsx";
import Timeline from "./Timeline.jsx";
import ExecutiveTeam from "./ExecutiveTeam.jsx";
import ToolsSection from "../Tools.jsx";
import Events from "./Events.jsx";
import ThankyouPage from "./ThankyouPage.jsx";

const Indexes = () => {
  const [currentPage, setCurrentPage] = useState(null);

  const handleNavigation = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case "welcome":
        return <WelcomePage />;
      case "history":
        return <Timeline />;
      case "executiveteam":
        return <ExecutiveTeam />;
      case "tools":
        return <ToolsSection />;
      case "events":
        return <Events />;
      case "thankyou":
        return <ThankyouPage />;
      default:
        return null;
    }
  };

  return (
    <div className="App">
      {/* <header className="app-header">
        <h1>
          <span className="highlight">Index</span>
        </h1>
      </header> */}

      {!currentPage && (
        <header className="app-header">
          <h1>
            <span className="highlight">Index</span>
          </h1>
        </header>
      )}

      {/* Show buttons only if no page is selected */}
      {!currentPage && (
        <div className="section-columns">
          {/* Left column: 1,2,3 */}
          <div className="button-column left-column fade-in">
            <button onClick={() => handleNavigation("welcome")}>
              <h1 className="starting">1.</h1>
              <span className="welcome-text">Welcome →</span>
            </button>
            <button onClick={() => handleNavigation("history")}>
              <h1 className="starting">2.</h1>
              <span className="welcome-text">History →</span>
            </button>
            <button onClick={() => handleNavigation("executiveteam")}>
              <h1 className="starting">3.</h1>
              <span className="welcome-text">Executive Team →</span>
            </button>
          </div>

          {/* Right column: 4,5,6 */}
          <div className="button-column right-column fade-in delay">
            <button onClick={() => handleNavigation("tools")}>
              <h1 className="starting">4.</h1>
              <span className="welcome-text">Tools →</span>
            </button>
            <button onClick={() => handleNavigation("events")}>
              <h1 className="starting">5.</h1>
              <span className="welcome-text">Events →</span>
            </button>
            <button onClick={() => handleNavigation("thankyou")}>
              <h1 className="starting">6.</h1>
              <span className="welcome-text">Thank You →</span>
            </button>
          </div>
        </div>
      )}

      {/* Show selected page only when a page is selected */}
      {currentPage && (
        <div className="content">
          {renderPage()}

          {/* Add a Back button to return to index buttons */}
          <button
            className="back-button"
            onClick={() => setCurrentPage(null)}
            style={{
              marginTop: "2rem",
              padding: "0.6rem 1.2rem",
              fontSize: "1rem",
              cursor: "pointer",
              borderRadius: "8px",
              border: "none",
              backgroundColor: "#4b1e85",
              color: "white",
              transition: "background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#6f3aa7")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#4b1e85")
            }
          >
            ← Back to Index
          </button>
        </div>
      )}
    </div>
  );
};

export default Indexes;

