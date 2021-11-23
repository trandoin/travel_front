import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import AdjustIcon from "@mui/icons-material/Adjust";
import Footer from "../componenets/footer";
export default function Package() {
  return (
    <Grid container direction="column">
      <LoggedInNavbar />
      <Grid height="5vh"></Grid>
      <Grid item container direction="row">
        <Grid md={1}></Grid>

        <Grid item container direction="column" md={5}>
          <Typography variant="h5" fontWeight="bold">
            3-Days Shilong Tour
          </Typography>
          <Typography variant="h5" fontWeight="bold" color="secondary">
            Rs.4500
          </Typography>
          <Typography variant="h5">
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
        </Grid>
        <Grid md={4}></Grid>
        <Grid item md={2}>
          <Button
            variant="contained"
            color="secondary"
            style={{ margin: "5px" }}
          >
            Book Now
          </Button>
        </Grid>
      </Grid>
      <Grid item item container direction="row">
        <Grid md={1}></Grid>
        <Typography variant="h5" fontWeight="bold">
          Spots
        </Typography>
      </Grid>
      <Grid item container direction="row" style={{ flexWrap: "wrap" }}>
        <Grid md={1}></Grid>
        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Elephant Falls
          </Typography>
        </Grid>
        <Grid md={0.5}></Grid>

        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Umiam Lake
          </Typography>
        </Grid>

        <Grid md={0.5}></Grid>
        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Umiam Lake
          </Typography>
        </Grid>
        <Grid md={1}></Grid>
        <Grid md={1}></Grid>
        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Elephant Falls
          </Typography>
        </Grid>
        <Grid md={0.5}></Grid>

        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Umiam Lake
          </Typography>
        </Grid>

        <Grid md={0.5}></Grid>
        <Grid md={3}>
          <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img>
          <Typography variant="h5" fontWeight="bold">
            Umiam Lake
          </Typography>
        </Grid>
      </Grid>
      <Grid
        border="solid"
        md={9}
        style={{ position: "relative", left: "10.5vw", top: "4.5vh" }}
      ></Grid>
      <Grid item container direction="row">
        <Grid md={1}></Grid>
        <Grid item md={2.5} container direction="column" padding="3vh">
          <AdjustIcon />

          <Typography variant="h5" fontWeight="bold">
            {" "}
            Day 1
          </Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
        </Grid>
        <Grid md={0.5}></Grid>
        <Grid item md={2.5} container direction="column" padding="3vh">
          <AdjustIcon />
          <Typography variant="h5" fontWeight="bold">
            {" "}
            Day 2
          </Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
        </Grid>
        <Grid md={0.5}></Grid>
        <Grid item md={2.5} container direction="column" padding="3vh">
          <AdjustIcon />

          <Typography variant="h5" fontWeight="bold">
            {" "}
            Day 3
          </Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
          <Typography>Lorem ipsum dolor sit amet</Typography>
          <Typography style={{ color: "#555" }}>Est. time: 8:30 pm</Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid md={1}></Grid>
        <Grid md={4}>
          <Typography variant="h5" fontWeight="bold">
            Inclusion
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid md={1}></Grid>
        <Grid md={4}>
          <Typography variant="h5" fontWeight="bold">
            Exclusion
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid md={1}></Grid>
        <Grid md={4}>
          <Typography variant="h5" fontWeight="bold">
            Rules
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </Typography>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
