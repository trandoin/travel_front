import React from "react";
import ReactDOM from "react-dom";
import { Carousel } from "react-customizable-carousel";
import Example from "./onHover";
import { Link } from "react-router-dom";
import Item from "./Item";
import {Grid} from '@mui/material'

const items = [
  {
    title: "image 1",
    url: process.env.PUBLIC_URL + "/images/mountain.jpeg  ",
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

// export function Item() {
//   return (
//     <div
//       style={{
//         width: "400px",
//         height: "400px",
//         backgroundColor: "red",
//       }}
//     ></div>
//   );
// }

export default function ViewCarousel() {
  return (
    <Grid margin='0vh 0vh 3vh 0vh'>
      <Carousel showItemsCount={3}>
        {items.map((item) => (
          <Link to={{ pathname: "/location" }}>
            <Item key={item.title} style={{ backgroundColor: "transparent" }}>
              <Example url={item.url} />
            </Item>
          </Link>
        ))}
      </Carousel>
    </Grid>
  );
}
