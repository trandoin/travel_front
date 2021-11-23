import React from "react";
import { Grid } from "@mui/material";

export default function PriceElement(props) {
  return (
    <Grid item container direction="row">
      <Grid md={0.5}></Grid>
      <Grid md={5.5} item textAlign="left">
        {props.name}
      </Grid>
      <Grid md={5.5} item textAlign="right">
        {props.price} Rs
      </Grid>
    </Grid>
  );
}
