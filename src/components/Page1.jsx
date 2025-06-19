import React from "react";
import "./Page1.css";

const Page1 = () => {
  return (
    <div className="top">
      <div className="heading">
        <h1 id="head">Onboarding</h1>
        <h2 id="head2">Presentation</h2>
      </div>

      <div className="images">
        <img
          src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/6612ff6a-0fb7-483a-b81b-ca8099028eab.jpeg"
          alt="image1"
        />
        <img
          src="https://img.genially.com/5fa1129c6daa6d0f6ff13d33/e0f925f0-07b1-492c-ba8c-c1352d7af1a6.jpeg"
          alt="image2"
        />
      </div>

      {/* <div className="buttons">
        <button>🔼</button>
        <button>🔽</button>
      </div> */}
    </div>
  );
};

export default Page1;



