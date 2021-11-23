import React from "react";
import { Grid } from "@mui/material";
import HotelCard from "./hotelCard";
import {Link} from 'react-router-dom'

function HotelContainer() {
  const items = [1, 2, 3, 4, 5, 6, 7];
  return (
    <Grid
      container
      md={11.7}
      direction="row"
      style={{ backgroundColor: "#e1e1e1" , justifyContent:"space-around",paddingBottom:'3vh', borderRadius:'20px'}}
    >
      {items.map((item, index) => {
        return <HotelCard item={item} index={index} />;
      })}
    </Grid>
  );
}

export default HotelContainer;
