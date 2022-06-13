import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./ScrolltoTop";

import "./App.css";
import Home from "./pages/Home";
import Project from "./pages/project";

import Navbar from "./comp/Navbar/Navbar.jsx";
import Footer from "./comp/Footer/Footer.jsx";

import client from "./client";

function App() {


  const [ProjectsList, setProjectsList] = useState([]);


  //* This one API Request is responsible for Creating the pages as well as Creating the ProjectCArds on home page 
  useEffect(() => {
    client
      .fetch("*[_type == 'projects']{ProjectName, ProjectDescription, ProjectCity,ProjectThumbnail{asset->{url}} ,images}")
      .then((res) => {
        setProjectsList(res);
      });
  }, []);

  return (
    <div className="App">
      <Navbar />

      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Home ProjectsList={ProjectsList} />} />
          {/* <Route path="/gallery" element={<Project />} /> */}

          {/* //* Adding Dynamic Routes for Projects */}
          {
            ProjectsList.map((item,index)=>{
              return (
                <Route key={index} path={`${item.ProjectName.toLowerCase().replaceAll(" ","_")}`} element={<Project ProjectName={item.ProjectName} ProjectDescription={item.ProjectDescription} ProjectCity={item.ProjectCity} />} />

              )

            })
          }
        </Routes>
      </ScrollToTop>

      <Footer />
    </div>
  );
}

export default App;
