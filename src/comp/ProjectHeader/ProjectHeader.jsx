import React from "react";
import "./ProjectHeader.css";

const ProjectHeader = (props) => {
  return (
    //!Detail Component

    <div className="ProjectHeader">
      <div className="details">
        <h1 className="ProjectHeading">{props.ProjectName}</h1>
        <h2 className="ProjectCity">{props.ProjectCity}</h2>

        <p>
          {props.ProjectDescription}
        </p>

        <button className="viewGallery btn btn-primary">View Gallery</button>
      </div> 

      {/*//! Slider Component   */}
      <div className="slider"> 
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://images.unsplash.com/photo-1559511260-66a654ae982a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=918&q=80"
                className="d-block w-100"
                alt="BannerImage"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
                className="d-block w-100"
                alt="BannerImage"
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1544161513-0179fe746fd5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
                className="d-block w-100"
                alt="BannerImage"
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
