import React from "react";
import "./Head.css";
import { Link } from "react-router-dom";


function Head() {
  return (
    <>
        
      <section className="MainHead">

          <div className="content">
            <h1 id="mainHeading">Remodeling can be hard.</h1>
            <h3 id="subHeading"> We're here to change that.</h3>
            <div className="btndiv">
            
              <Link to="/Form" className="mainBtn btn btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
      </section>

     
    </>
  );
}

export default Head;
