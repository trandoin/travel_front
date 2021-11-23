import React from "react";
import { Grid, Typography } from "@mui/material";

export default function TotalPriceElement(props) {
  return (
    <Grid item container direction="row">
      <Grid md={0.5}></Grid>
      <Grid md={5.5} item textAlign="left">
        <Typography varinat="h6" fontWeight='bold'>Total</Typography>
      </Grid>
      <Grid md={5.5} item textAlign="right">
      <Typography varinat="h6" fontWeight='bold'>{props.price} Rs</Typography>
      </Grid>
    </Grid>
  );
}
