import React from "react";
import { Link } from "react-router-dom";

import "./homeprojectcards.css";

const HomeProjectCards = ({ ProjectsList }) => {
  return (
    <div id="HomeProject" className="container-fluid">

      <div className="HomeProjectsCardsContainer container-fluid">
        {ProjectsList.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {ProjectsList.length > 0 && (
                <div key={index} className="card">
                  <img
                    src={item.ProjectThumbnail.asset.url}
                    className="card-img-top"
                    alt="Project Thumbnail"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{item.ProjectName}</h5>
                    <h5 className="card-country">{item.ProjectCity}</h5>
                    <Link
                      to={`/${item.ProjectName.toLowerCase().replaceAll(
                        " ",
                        "_"
                      )}`}
                      className="cardBtn btn btn-success"
                    >
                      Visit Project
                    </Link>
                  </div>
                </div>
              )}
            </React.Fragment>
          );
        })}
      </div>

    </div>
  );
};

export default HomeProjectCards;
