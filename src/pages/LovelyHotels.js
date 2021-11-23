import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";

import { Grid, Typography } from "@mui/material";

function LovelyHotels() {
  return (
    <Grid container direction="row">
      <Grid item md={2.4}></Grid>
      <Grid
        item
        container
        md={7}
        textAlign="center"
        style={{
          height: "20vh",
          border: "solid",
          // backgroundColor: "whitesmoke",
          borderColor: "rgba(0, 0, 0, 0.4)",
          borderRadius: "2vh",
          alignContent: "center",
        }}
      >
        <Grid item md={3}>
          <Typography
            variant="h3"
            fontWeight="bold"
            margin="1vh"
            marginLeft="6vh"
          >
            Lovely Hosts
          </Typography>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          md={1.5}
          style={{ height: "15vh", display: "flex", flexDirection: "column" }}
          
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
            <Grid item  marginTop="1vh">
              Hotels
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          md={1.5}
          style={{ height: "15vh", display: "flex", flexDirection: "column" }}
          
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
                style={{ padding: "1vh" }}
              ></img>
            </Grid>
            <Grid item  marginTop="1vh">
              Home
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          md={1.5}
          style={{ height: "15vh", display: "flex", flexDirection: "column" }}
          
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
            <Grid item  marginTop="1vh">
              Renter
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={0.5}></Grid>
        <Grid
          item
          md={1.5}
          style={{ height: "15vh", display: "flex", flexDirection: "column" }}
          
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
                style={{ padding: "1vh" }}
              ></img>
            </Grid>
            <Grid item  marginTop="1vh">
              Lodge
            </Grid>
          </Grid>
        </Grid>
        <Grid item md={2}></Grid>
      </Grid>

      <Grid item md={3}></Grid>
    </Grid>
  );
}

export default LovelyHotels;
