import React from "react";
import "./Filter.css";

const Filter = ({ FilterKeyword, SetFilterKeyword }) => {
  const FilterArray = [
    {
      FilterName: "All",
      FilterKeyword: "all", 
      ImageUrl:
        "https://images.unsplash.com/photo-1593604454703-20ecca9bb373?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      FilterName: "Kitchen",
      FilterKeyword: "kitchen",
      ImageUrl:
        "https://images.unsplash.com/photo-1622372738946-62e02505feb3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=532&q=80",
    },
    {
      FilterName: "Bathroom",
      FilterKeyword: "bathroom",
      ImageUrl:
        "https://images.unsplash.com/photo-1595515769474-4f217f925139?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=616&q=80",
    },
    {
      FilterName: "Blinds",
      FilterKeyword: "blinds",
      ImageUrl:
        "https://images.unsplash.com/photo-1602612996819-3cd306f68b4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      FilterName: "Flooring",
      FilterKeyword: "flooring",
      ImageUrl:
        "https://images.unsplash.com/photo-1574197634772-f0de0d41a02e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      FilterName: "Lawn",
      FilterKeyword: "lawn",
      ImageUrl:
        "https://images.unsplash.com/photo-1590758122144-da8c56ee64ff?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      FilterName: "Full Condo",
      FilterKeyword: "condo",
      ImageUrl:
        "https://images.unsplash.com/photo-1600184197887-888f4ddd98e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=557&q=80",
    },
    {
      FilterName: "CustomHome",
      FilterKeyword: "custom_home",
      ImageUrl:
        "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
    {
      FilterName: "Laneway",
      FilterKeyword: "laneway",
      ImageUrl:
        "https://nakamotoforestry.co.uk/wp-content/uploads/2019/08/4_Laneway-House_03.jpg",
    },
    {
      FilterName: "Basement",
      FilterKeyword: "basement",
      ImageUrl:
        "https://images.pexels.com/photos/7174396/pexels-photo-7174396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    },
    {
      FilterName: "Duplex",
      FilterKeyword: "duplex",
      ImageUrl:
        "https://images.unsplash.com/photo-1509395176047-4a66953fd231?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=580&q=80",
    },
  ];

  const FilterClickHandler = (keyword) => {
    if (keyword === FilterKeyword) {
      SetFilterKeyword("all");
    } else {
      SetFilterKeyword(keyword);
    }
  };
 

  return (
    <div className="FilterDiv">
      <h3 id="FilterHeading">Filter Photos </h3>
      <div className="FilterContainer">
        {FilterArray.map((item, index) => {
          return (
            <div
              key={index}
              className="FilterRound"
              onClick={() => {FilterClickHandler(item.FilterKeyword)}}
            >
              <img src={item.ImageUrl} alt={item.FilterName} />
              <h6>{item.FilterName}</h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
