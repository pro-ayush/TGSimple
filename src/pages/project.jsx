import React, { useState } from "react";
import ProjectHeader from "../comp/ProjectHeader/ProjectHeader";
import Filter from "../comp/Filters/Filter";
import Form from "../comp/Form/Form";
import FeatureGallery from "../comp/FeatureGallery/FeatureGallery";

const Project = (props) => {
  const [FilterKeyword, setFilterkeyword] = useState("all");

  return (
    <React.Fragment>
      <ProjectHeader
        ProjectName={props.ProjectName}
        ProjectDescription={props.ProjectDescription}
        ProjectCity={props.ProjectCity}
      />
      <Filter
        FilterKeyword={FilterKeyword}
        SetFilterKeyword={setFilterkeyword}
      />
      <FeatureGallery
        FilterKeyword={FilterKeyword}
        ProjectName={props.ProjectName}
      />
      <Form />
    </React.Fragment>
  );
};

export default Project;
