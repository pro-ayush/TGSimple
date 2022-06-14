import React, { useState, useEffect } from "react";
import "./SimpleGallery.css";
import client from "../../client";

// importing Icons
import { AiFillCloseCircle } from "react-icons/ai";
import { BiLeftArrowAlt, BiRightArrowAlt } from "react-icons/bi";

const SimpleGallery = ({ FilterKeyword, ProjectName }) => {
  // Lightbox States
  const [isLightBox, setIsLightBox] = useState(false);
  const [LightBoxImageUrl, setLightBoxImageUrl] = useState("");

  // Images States
  const [BeforePhotos, setBeforePhotos] = useState([]);
  const [AfterPhotos, setAfterPhotos] = useState([]);

  useEffect(() => {
    //* Fetching Before Images
    client
      .fetch( 
        `*[_type == 'simpleProjects' && ProjectName == '${ProjectName}']{
            BeforeImages[] {
              Image {
                asset-> {url}
              },
              ImageType
            }
        } `
      )
      .then((responce) => {
        setBeforePhotos(responce[0].BeforeImages);
      });

    //*Fetching After Images
    client
      .fetch(
        `*[_type == 'simpleProjects' && ProjectName == '${ProjectName}']{
            AfterImages[] {
              Image {
                asset-> {url}
              },
              ImageType
            }
        } `
      )
      .then((responce) => {
        setAfterPhotos(responce[0].AfterImages);
      });
  }, [ProjectName]);

  //* Adding Functionality to the Website

  function OpenLightBox(ImageUrl) {
    setIsLightBox(true);
    setLightBoxImageUrl(ImageUrl);
  }

  function CloseLightBox() {
    setIsLightBox(false);
  }

  return (
    <div className="GalleryContainer container-fluid">
      {/*  //!Lightbox Logic */}
      {isLightBox && (
        <div className="lightbox">
          {/* <BiLeftArrowAlt id="LeftArrow" />
          <BiRightArrowAlt id="RightArrow" /> */}
          <AiFillCloseCircle
            onClick={() => CloseLightBox()}
            id="CloseLightbox"
          />

          <div className="lightboxImage">
            <img src={LightBoxImageUrl} alt="Light Box" />
          </div>
        </div>
      )}

      {/* //! Gallery Logic  */}

      <h1 className="GalleryHeading">Before Project Images</h1>

      <div className="BeforeGallery GridGallery container-fluid">
        {BeforePhotos.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {(FilterKeyword === item.ImageType || FilterKeyword === "all") &&
              BeforePhotos.length > 0 ? (
                <div className="imageHolder">
                  <img
                    onClick={() => OpenLightBox(item.Image.asset.url)}
                    src={item.Image.asset.url}
                    alt="before"
                  />
                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>

      <h1 className="GalleryHeading">After Project Images</h1>
      <div className="AfterGallery GridGallery container-fluid">
        {AfterPhotos.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {(FilterKeyword === item.ImageType || FilterKeyword === "all") &&
              AfterPhotos.length > 0 ? (
                <div className="imageHolder">
                  <img
                    onClick={() => OpenLightBox(item.Image.asset.url)}
                    src={item.Image.asset.url}
                    alt="after"
                  />

                </div>
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}; 

export default SimpleGallery;
