// Importing Dependencies
import React, { useState, useEffect } from "react";
import AwesomeLightbox from "react-awesome-lightbox";
import client from "../../client.js";
// Importing Styles
import "react-awesome-lightbox/build/style.css";
import "./FeatureGallery.css";

const FeatureGallery = ({ FilterKeyword, ProjectName }) => {
  // =========================================== Ligtbox Logic ================================================

  //*Logic States
  const [isLightbox, setIsLightBox] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [whichGallery, setWhichGallery] = useState("Before");

  //*Images States
  const [BeforePhotos, setBeforePhotos] = useState([]);
  const [AfterPhotos, setAfterPhotos] = useState([]);

  //* Extracting Urls for Lightbox
  const [BeforeLightBoxImages, setBeforeLightBoxImages] = useState([]);
  const [AfterLightBoxImages, setAfterLightBoxImages] = useState([]);

  //*Fetching Images
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

  //*Sorting the images
  useEffect(() => {
    setBeforeLightBoxImages(
      BeforePhotos.map((element) => element.Image.asset.url)
    );
    setAfterLightBoxImages(
      AfterPhotos.map((element) => element.Image.asset.url)
    );
  }, [BeforePhotos, AfterPhotos]);

  //   BeforePhotos.forEach((element) => {
  //     setBeforeLightBoxImages([...BeforeLightBoxImages, element.Image.asset.url]);
  //     console.log(element.Image.asset.url)
  //   });

  //   AfterPhotos.forEach((element) => {
  //     console.log("done")
  //     setAfterLightBoxImages([...AfterLightBoxImages, element.Image.asset.url]);
  //   });

  //* Extracting Url's finished

  function OpenLightBox(InputIndex, Galleryname) {
    setCurrentImageIndex(InputIndex);
    setWhichGallery(Galleryname);
    setIsLightBox(true);
  }

  function CloseLightBOx() {
    setIsLightBox(false);
  }

  // =============================================== Lightbox Logic Ended ==========================================

  const Bphotos1 = BeforePhotos.filter((item, index) => index % 3 === 0);
  const Bphotos2 = BeforePhotos.filter((item, index) => index % 3 === 1);
  const Bphotos3 = BeforePhotos.filter((item, index) => index % 3 === 2);
  // =====================================   Before Images Ended ===============================

  const Aphotos1 = AfterPhotos.filter((item, index) => index % 3 === 0);
  const Aphotos2 = AfterPhotos.filter((item, index) => index % 3 === 1);
  const Aphotos3 = AfterPhotos.filter((item, index) => index % 3 === 2);

  return (
    <React.Fragment>
      {/* =========================================== Lightbox ===================================== */}
      {isLightbox && (
        <AwesomeLightbox
          images={
            whichGallery === "before"
              ? BeforeLightBoxImages
              : AfterLightBoxImages
          }
          startIndex={currentImageIndex}
          onClose={() => CloseLightBOx()}
        />
      )}
      {/* =========================================== Lightbox Ended ========================================== */}

      <h1 className="GalleryHeading">Before Project Images</h1>
      <div className="Gallery container-fluid">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3">
          <div className="col ">
            {Bphotos1.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3, "before")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
          <div className="col ">
            {Bphotos2.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3 + 1}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3 + 1, "before")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
          <div className="col ">
            {Bphotos3.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3 + 2}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3 + 2, "before")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* ============================================= After Gallery =============================== */}

      <h1 className="GalleryHeading">After Project Images</h1>

      <div className="Gallery container-fluid">
        <div className="row row-cols-2 row-cols-sm-2 row-cols-md-3">
          <div className="col ">
            {Aphotos1.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3, "after")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
          <div className="col ">
            {Aphotos2.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3 + 1}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3 + 1, "before")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
          <div className="col">
            {Aphotos3.map((item, index) => {
              return (
                <React.Fragment key={index}>
                  {(FilterKeyword === item.ImageType ||
                    FilterKeyword === "all") &&
                  BeforePhotos.length > 0 ? (
                    <img
                    loading="lazy"
                      key={index * 3 + 2}
                      className="GalleryImage"
                      src={item.Image.asset.url}
                      alt="Before"
                      onClick={() => OpenLightBox(index * 3 + 2, "before")}
                    />
                  ) : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>

      {/* ======================================== Gallery Started =============================================== */}
    </React.Fragment>
  );
};

export default FeatureGallery;


// col-6 col-sm-6 col-lg-4 col-4