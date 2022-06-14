import React from "react";
import ReactCompareImage from "react-compare-image";
import "./ImageComparison.css"

const ImageComparison = () => {
  const before =
    "https://images.unsplash.com/photo-1655110788012-7b509ed12194?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80";
  const after =
    "https://images.unsplash.com/photo-1638913971789-667874197280?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80";

  return (
    <>
      {" "}
      <div className="mainWrapper">
        <div className="contentWrapper">
          <ReactCompareImage leftImage={before} rightImage={after} />
        </div>
      </div>
    </>
  );
};

export default ImageComparison;
