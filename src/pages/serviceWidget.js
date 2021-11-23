import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Grid, Typography } from "@mui/material";

function ServiceWidget() {
  return (
    <Grid container direction="row">
      <Grid item md={3}></Grid>
      <Grid
        item
        container
        md={6}
        textAlign="center"
        style={{
          height: "20vh",
          border: "solid",
          backgroundColor: "whitesmoke",
          borderColor: "gray",
          borderRadius: "2vh",
          alignContent: "center",
        }}
      >
        <Grid item md={3.5}>
          <Typography
            variant="h3"
            fontWeight="bold"
            margin="1vh"
            marginLeft="6vh"
          >
            Our Services
          </Typography>
        </Grid>
        <Grid item md={1}></Grid>
        <Grid
          item
          container
          md={1.5}
          style={{ height: "15vh" }}
          backgroundColor="whitesmoke"
          direction="column"
        >
          <Grid container direction="column">
            {" "}
            <Grid
              item
              backgroundColor="#F4D4FF"
              style={{ height: "12vh", borderRadius: "1vh" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/service1.png"}
                width="100px"
                style={{ padding: "1vh" }}
              ></img>
            </Grid>
            <Grid item backgroundColor="whitesmoke" marginTop="1vh">
              Travel Guide
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          container
          md={1.5}
          style={{ height: "15vh" }}
          backgroundColor="whitesmoke"
          direction="column"
        >
          <Grid container direction="column">
            {" "}
            <Grid
              item
              backgroundColor="#D4EEFF"
              style={{ height: "12vh", borderRadius: "1vh" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/service1.png"}
                width="100px"
                style={{ padding: "0.8vh" }}
              ></img>
            </Grid>
            <Grid item backgroundColor="whitesmoke" marginTop="1vh">
              Tourist Cab
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          container
          md={1.5}
          style={{ height: "15vh" }}
          backgroundColor="whitesmoke"
          direction="column"
        >
          <Grid container direction="column">
            {" "}
            <Grid
              item
              backgroundColor="#F4D4FF"
              style={{ height: "12vh", borderRadius: "1vh" }}
            >
              <img
                src={process.env.PUBLIC_URL + "/images/service1.png"}
                width="100px"
                style={{ padding: "1vh" }}
              ></img>
            </Grid>
            <Grid item backgroundColor="whitesmoke" marginTop="1vh">
              Custom Trips
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>
      <Grid item md={3}></Grid>
    </Grid>
  );
}

export default ServiceWidget;
