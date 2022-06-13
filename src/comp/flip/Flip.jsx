import React from "react";
import "./Flip.css";

const Flip = ({ BeforeImageUrl, AfterImageUrl }) => {
  return (
    <div className="flip-card">
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <img src={BeforeImageUrl} alt="Before" />
        </div>
        <div className="flip-card-back">
          <img src={AfterImageUrl} alt="After" />
        </div>
      </div>
    </div>
  );
};

export default Flip;
