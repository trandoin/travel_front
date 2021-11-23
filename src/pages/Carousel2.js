import React, { useState } from "react";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import Example from "./onHover";
import "./styles.css";
import { Link } from "react-router-dom";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Simple2() {
  const items = [
    {
      title: "image 1",
      url: process.env.PUBLIC_URL + "/images/nature1.png",
      ratings: 2,
    },
    {
      title: "image 2",
      url: process.env.PUBLIC_URL + "/images/nature2.png",
      ratings: 2,
    },
    {
      title: "image 13",
      url: process.env.PUBLIC_URL + "/images/nature3.png",
      ratings: 2,
    },
    {
      title: "image 14",
      url: process.env.PUBLIC_URL + "/images/nature3.png",
      ratings: 2,
    },
    {
      title: "image 55",
      url: process.env.PUBLIC_URL + "/images/nature1.png",
      ratings: 2,
    },
  ];
  return (
    <div className="App" style={{height:"40vh"}}>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints} pagination={false}>
          {items.map((item) => (
            <Link to={{pathname:'/location'}}>
            <Item key={item.title} style={{ backgroundColor: "transparent" }}>
              <Example url={item.url} />
            </Item>
            </Link>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Simple2;
