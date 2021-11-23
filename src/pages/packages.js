import { Button, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import Footer from "../componenets/footer";
export default function Packages() {
  return (
    <Grid container direction="column">
      <Grid item container direction="row" md={12}>
        <Grid item container md={6} justifyContent="center" alignItems="center">
          <Grid md={3}>
            <img
              src={`${process.env.PUBLIC_URL}/images/nature1.png`}
              style={{
                border: "solid",
                borderColor: "white",
                margin: "auto",
                borderRadius: "10px",
              }}
              width="400px"
              height="400px"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/images/nature1.png`}
              style={{
                zIndex: "-2",
                position: "absolute",
                left: "22%",
                top: "2.5%",
                border: "solid",
                borderColor: "white",
                margin: "auto",
                borderRadius: "10px",
              }}
              width="350px"
              height="350px"
            ></img>
          </Grid>
        </Grid>
        <Grid item container direction="column" md={4} justifyContent="center">
          <Grid md={2}></Grid>
          <Typography variant="h4" fontWeight="bold">
            3-Days Shilong Tour
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="secondary">
            4500
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="secondary">
            Services Included
          </Typography>
          <Grid item container direction="row">
            <Link to={{ pathname: "/package" }}>
              <Button
                variant="outlined"
                color="secondary"
                width="auto"
                style={{ margin: "5px" }}
              >
                Learn More
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              width="auto"
              style={{ margin: "5px" }}
            >
              Book Now
            </Button>
          </Grid>
          <Grid md={2}></Grid>
        </Grid>
      </Grid>
      <Grid item container direction="row" md={12}>
        <Grid md={2}></Grid>
        <Grid item container direction="column" md={4} justifyContent="center">
          <Grid md={2}></Grid>
          <Typography variant="h4" fontWeight="bold">
            3-Days Shilong Tour
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="secondary">
            4500
          </Typography>
          <Typography>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          </Typography>
          <Typography variant="h6" fontWeight="bold" color="secondary">
            Services Included
          </Typography>
          <Grid item container direction="row">
            <Link to={{ pathname: "/package" }}>
              <Button
                variant="outlined"
                color="secondary"
                width="auto"
                style={{ margin: "5px" }}
              >
                Learn More
              </Button>
            </Link>
            <Button
              variant="contained"
              color="secondary"
              width="auto"
              style={{ margin: "5px" }}
            >
              Book Now
            </Button>
          </Grid>
          <Grid md={1}></Grid>
        </Grid>
        <Grid item container md={6} justifyContent="center" alignItems="center">
          <Grid md={5}>
            <img
              src={`${process.env.PUBLIC_URL}/images/nature1.png`}
              style={{
                border: "solid",
                borderColor: "white",
                margin: "auto",
                borderRadius: "10px",
              }}
              width="400px"
              height="400px"
            ></img>
            <img
              src={`${process.env.PUBLIC_URL}/images/nature1.png`}
              style={{
                zIndex: "-2",
                position: "absolute",
                left: "22%",
                top: "2.5%",
                border: "solid",
                borderColor: "white",
                margin: "auto",
                borderRadius: "10px",
              }}
              width="350px"
              height="350px"
            ></img>
          </Grid>
          <Grid item md={2}></Grid>
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
}
