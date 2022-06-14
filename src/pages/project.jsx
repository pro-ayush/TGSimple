import React, { useState } from "react";
import "./project.css";
// import Gallery from "../comp/Gallery/Gallery";
import ProjectHeader from "../comp/ProjectHeader/ProjectHeader";
import Filter from "../comp/Filters/Filter";
import SimpleGallery from "../comp/SimpleGallery/SimpleGallery";
import Form from '../comp/Form/Form'

const Project = (props) => {


  const [FilterKeyword, setFilterkeyword] = useState("all");

  return (
    <React.Fragment>
      
      <ProjectHeader  ProjectName={props.ProjectName} ProjectDescription={props.ProjectDescription} ProjectCity={props.ProjectCity} />


      <Filter FilterKeyword={FilterKeyword} SetFilterKeyword={setFilterkeyword} />
      {/* <Gallery FilterKeyword={FilterKeyword} ProjectName={props.ProjectName} /> */}
      <SimpleGallery FilterKeyword={FilterKeyword} ProjectName={props.ProjectName} />


      <Form />

      
    </React.Fragment>
  );
};

export default Project;
