import React, { useState } from "react";
import "./project.css";
import Gallery from "../comp/Gallery/Gallery";
import ProjectHeader from "../comp/ProjectHeader/ProjectHeader";
import Filter from "../comp/Filters/Filter";

const Project = (props) => {


  const [FilterKeyword, setFilterkeyword] = useState("all");

  return (
    <React.Fragment>
      
      <ProjectHeader />


      <Filter FilterKeyword={FilterKeyword} SetFilterKeyword={setFilterkeyword} />
      <Gallery FilterKeyword={FilterKeyword} />



    </React.Fragment>
  );
};

export default Project;
