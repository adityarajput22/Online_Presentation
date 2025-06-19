import React, { useState } from "react";
import Page1 from "./Page1";
import ToolsSection from "../Tools";
import Timeline from "./Timeline";
import ExecutiveTeam from "./ExecutiveTeam";
import WelcomePage from "./WelcomePage" ; 
import ThankyouPage from "./ThankyouPage";
import Events from "./Events" ; 
import Indexes from "./Indexes";

const HomePage = () => {
  const components = [
    <Page1 />,
    <Indexes/> , 
    <WelcomePage/>,
    <Timeline />,
    <ExecutiveTeam />,
    <ToolsSection />,
    <Events/> , 
    <ThankyouPage/>, 
     
  ];
  const [currentPage, setCurrentPage] = useState(0);

  const nextPage = () => {
    if (currentPage < components.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <>
      <div>{components[currentPage]}</div>
      <div className="buttons">
        <button onClick={prevPage} disabled={currentPage === 0}>
          🔼
        </button>
        <button
          onClick={nextPage}
          disabled={currentPage === components.length - 1}
        >
          🔽
        </button>
      </div>
    </>
 
  );
};

export default HomePage;








