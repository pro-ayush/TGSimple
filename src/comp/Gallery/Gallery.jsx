import React, { useState, useEffect } from "react";
import client from "../../client.js";

import "./Gallery.css";
import Flip from "../flip/Flip.jsx";
import ImageComparison from "../ImageComparison/ImageComparison.jsx";

const Gallery = ({ FilterKeyword, ProjectName }) => {
  const [isImageComparisonOn, setIsImageComparisonOn] = useState(true);

  const [BeforePhotos, setBeforePhotos] = useState([]);
  const [AfterPhotos, setAfterPhotos] = useState([]);


  //* Fetching Before Images
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'projects' && ProjectName == "${ProjectName}" ]{
          images[]{
            BeforeImage{
          asset->{url}
              },
              ImageType
          },
        }`
      )
      .then((response) => {
        setBeforePhotos(response[0].images);
      });

    return () => {
      console.log("Removed the Before API call ");
    };
  }, [ProjectName]);


  //* Fetching AFter Images
  useEffect(() => {
    client
      .fetch(
        `*[_type == 'projects' && ProjectName == "${ProjectName}" ]{
          images[]{
            AfterImage{
          asset->{url}
              },
              ImageType
          },
        }`
      )
      .then((response) => {
        setAfterPhotos(response[0].images);
      });

    return () => {
      console.log("Removed the After API call ");
    };
  }, [ProjectName]);

  return (
    <div className="container-fluid">
      {/* //?Image Comparison  */}

      {isImageComparisonOn ? (
        <div onClick={setIsImageComparisonOn(!isImageComparisonOn)}>
          <ImageComparison />
        </div>
      ) : null}

      {/* //* ImageComparison Widget //* iMAGE gALLERY */}

      <div className="gridGallery">
        {BeforePhotos.map((item, index) => {
          return (
            <React.Fragment key={index}>
              {(FilterKeyword === item.ImageType || FilterKeyword === "all") && (AfterPhotos.length > 0)  ? (
                <Flip
                  key={index}
                  BeforeImageUrl={item.BeforeImage.asset.url}
                  AfterImageUrl={AfterPhotos[index].AfterImage.asset.url}
                />
              ) : null}
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
