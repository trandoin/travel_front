import { Typography } from "@mui/material";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

import { Grid } from "@mui/material";
import "../font.css";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import ClearIcon from "@mui/icons-material/Clear";
import GoogleMap from "./GoogleMap";
import Footer from "../componenets/footer";

const img_styles_active = {
  marginLeft: "45px",
  width: "500px",
  height: "90px",
  textAlign: "center",
  backgroundColor: "#1858FB26",
  display: "flex",
  justifyContent: "space-between",
};

const img_styles_inactive = {
  marginLeft: "45px",
  width: "500px",
  height: "90px",
  textAlign: "center",
  display: "flex",
  justifyContent: "space-between",
};

const button_style = {
  margin: "20px",
  marginLeft: "80%",
  backgroundColor: "purple",
  color: "white",
  padding: "0.8vh",
  borderRadius: "10px",
};

const proceed_button_style = {
  fontWeight: "700",
  fontSize: "2vh",
  width: "15vw",
  height: "49px",
  borderRadius: "9px",
  textAlign: "center",
  padding: "9px",
};

const spot_name_header = {
  fontWeight: "700",
  textAlign: "left ",
  fontSize: "20px",
};

const selection_header = {
  fontWeight: "500",
  textAlign: "left ",
  fontSize: "20px",
};
const spot_description = {
  fontWeight: "400",
  fontSize: "12px",
  opacity: "0.4",
  textAlign: "left ",
};

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const CheckOut = () => {
  const [options, setOptions] = useState([
    { label: "Spot 1", value: "grapes" },
    { label: "Spot 2", value: "mango" },
    { label: "Spot 3", value: "strawberry", disabled: true },
  ]);
  return (
    <>
      <LoggedInNavbar />
      <Typography variant="h4" margin="1vw" marginLeft="62px">
        Nearby locations for <strong>Nashik</strong>
      </Typography>
      <Grid container direction="column" style={{ backgroundColor: "white" }}>
        <Grid item container direction="row">
          <Grid
            item
            md={6}
            container
            style={{ overflowY: "scroll" }}
            direction="column"
          >
            {options.map((item, index) => {
              return (
                <Grid item margin="6px">
                  <Grid
                    container
                    direction="row"
                    onClick={() => {
                      var temp_options = [];
                      options.forEach((item2, index2) => {
                        if (index == index2) {
                          item2.disabled = !item2.disabled;
                        }
                        temp_options.push(item2);
                      });
                      setOptions(temp_options);
                    }}
                    style={
                      item.disabled ? img_styles_active : img_styles_inactive
                    }
                  >
                    <Grid item md={3}>
                      <img
                        src={`${process.env.PUBLIC_URL}/images/nature1.png`}
                        width="100px"
                        height="72px"
                        style={{ margin: "9px" }}
                      ></img>
                    </Grid>
                    <Grid
                      item
                      md={7.5}
                      style={{
                        height: "9vh",
                      }}
                    >
                      <Typography style={spot_name_header}>
                        {item.label}
                      </Typography>
                      <Typography style={spot_description}>
                        4000 visiters daily
                      </Typography>
                      <Typography style={spot_description}>
                        Some extra information
                      </Typography>
                    </Grid>
                    <Grid item alignSelf="center" md={1}>
                      Eye
                    </Grid>
                  </Grid>
                </Grid>
              );
            })}
          </Grid>
          <Grid item md={5} container direction="column">
            {/* <img src={`${process.env.PUBLIC_URL}/images/nature1.png`}></img> */}
            <GoogleMap width="45%" height="65%" />
          </Grid>
        </Grid>
        <Grid
          container
          direction="column"
          style={{
            width: "40vw",
            padding: "55px",
            border: "solid 1px gray",
            borderRadius: "9px",
            marginLeft: "4.5vw",
          }}
        >
          <Grid>
            <Typography style={selection_header}>Your selections</Typography>
          </Grid>
          <Grid
            item
            container
            direction="row"
            style={{
              minHeight: "3vh",
              margin: "auto",
              display: "flex",
              flexDirection: "row",
            }}
          >
            {options.map((item, index) => {
              if (item.disabled)
                return (
                  <Grid
                    item
                    width="max-content"
                    container
                    direction="row"
                    style={{
                      height: "auto",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "center",
                      border: "solid",
                      borderWidth: "1px",
                      borderRadius: "5px",
                      margin: "5px",
                      padding: "5px",
                      backgroundColor: "white",
                    }}
                  >
                    <Typography height="max-content">{item.label}</Typography>
                    <Button
                      variant="text"
                      onClick={() => {
                        var temp_options = [];
                        options.forEach((item2, index2) => {
                          if (index == index2) {
                            item2.disabled = !item2.disabled;
                          }
                          temp_options.push(item2);
                        });
                        setOptions(temp_options);
                      }}
                    >
                      <ClearIcon
                        style={{ position: "relative", left: "20px" }}
                      />
                    </Button>
                  </Grid>
                );
            })}
          </Grid>
          <Grid style={{ position: "relative", left: "-150px" }}>
            <Link
              to={{ pathname: "/check2" }}
              style={{
                textDecoration: "none",
                margin: "auto",
                alignItems: "center",
              }}
            >
              <Button
                variant="contained"
                color="secondary"
                style={button_style}
              >
                <Typography style={proceed_button_style}>
                  Proceed For Booking
                </Typography>
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{ position: "relative", top: "20px" }}>
        <Footer />
      </Grid>
    </>
  );
};

export default CheckOut;
