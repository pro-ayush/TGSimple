import React from "react";
import { Link } from "react-router-dom";

import "./homeprojectcards.css";

const HomeProjectCards = () => {
  const projects = [
    {
      name: "Vancouver",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1609825488888-3a766db05542?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80",
    },
    {
      name: "Toronto",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1526417501781-5e7e587b7686?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Edmonton",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1617336422396-e1dfc4210ec5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=871&q=80",
    },
    {
      name: "Burnaby",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1628231627828-5e94b310dffe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      name: "Surrey",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1563421743460-1ee3c68f0ddf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=964&q=80",
    },
    {
      name: "East Hill",
      Description: "hello hello hello hello world etc",
      imgUrl:
        "https://images.unsplash.com/photo-1642814835524-fd5247490592?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (

    <div id="HomeProject container-fluid">

        <h1 id="HomeProjectHeading">Our Projects</h1>


        <div className="HomeProjectsCardsContainer container-fluid">
        {projects.map((item, index) => {
            return (
            <div key={index} className="card">
                <img src={item.imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <p className="card-text">
                    {item.Description}
                </p>
                <Link to={"/"} className="cardBtn btn btn-success">
                    Visit Project
                </Link>
                </div>
            </div>
            );            
        })}
        </div>

        <div className="viewAllDiv">
          <Link  ink to={"/gallery"} className="ViewAll btn btn-primary">VIEW All PROJECTS</Link>

        </div>

    </div>

  );
};

export default HomeProjectCards;
