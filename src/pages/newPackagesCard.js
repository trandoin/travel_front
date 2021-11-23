import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";

export default function NewPackagesCard() {
  return (
    <Grid
      item
      container
      direction="column"
      width="300px"
      padding="9px"
      borderRadius="9px"
      style={{ boxShadow: "2px 2px 20px rgba(0, 0, 0, 0.08)" , margin:'20px'}}
    >
      <Grid item margin="auto">
        <img
          src={`${process.env.PUBLIC_URL}/images/mountain.jpeg`}
          height="282px"
          width="282px"
          style={{ borderRadius: "9px" }}
        ></img>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={10.5} container direction="column">
          <Typography
            style={{
              fontSize: "20px",
              fontWeight: "600",
              textAlign: "left",
            }}
          >
            Dummy Site
          </Typography>
          <Typography
            style={{
              fontSize: "14px",
              fontWeight: "600",
              textAlign: "left",
              opacity: "40%",
            }}
          >
            Shilong, Meghalya
          </Typography>
          <Typography
            style={{
              fontSize: "12px",
              fontWeight: "600",
              textAlign: "left",
              opacity: "40%",
            }}
          >
            {500} Reviews
          </Typography>
          <Rating
            name="read-only"
            value={4}
            readOnly
            style={{ fontSize: "12px" }}
          />
        </Grid>
        <Grid item md={1}>
          <FavoriteIcon style={{ color: "#FF7999" }} />
        </Grid>
      </Grid>
    </Grid>
  );
}
