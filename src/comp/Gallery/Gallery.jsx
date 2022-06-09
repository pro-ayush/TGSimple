import React from "react";
import "./Gallery.css";

const Gallery = ({ FilterKeyword }) => {
  const items = [
    {
      ImageType: "kitchen",
      ImgUrl:
        "https://images.unsplash.com/photo-1654568167403-00e8045e9874?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      ImageType: "bathroom",
      ImgUrl:
        "https://images.unsplash.com/photo-1654514434264-2b9bde34e562?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=388&q=80",
    },
    {
      ImageType: "basement",
      ImgUrl:
        "https://images.unsplash.com/photo-1644982647970-e72b0397e57b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80",
    },
    {
      ImageType: "duplex",
      ImgUrl:
        "https://images.unsplash.com/photo-1648737154448-ccf0cafae1c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80",
    },
    {
      ImageType: "bathroom",
      ImgUrl:
        "https://images.unsplash.com/photo-1654720482200-71eaa3af496d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=436&q=80",
    },
    {
      ImageType: "kitchen",
      ImgUrl:
        "https://images.unsplash.com/photo-1654722440303-caad3a39431c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
    },
    {
      ImageType: "bathroom",
      ImgUrl:
        "https://images.unsplash.com/photo-1638913974071-ad0045d13691?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80",
    },
  ];

  return (
    <div className="container-fluid">
      <div className="gridGallery">
        {items.map((item, index) => {
          return (
            <>
              {FilterKeyword === item.ImageType || FilterKeyword === "all" ? (
                <img key={index} src={item.ImgUrl} alt={index} />
              ) : null}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Gallery;
