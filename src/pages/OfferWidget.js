import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { Link } from "react-router-dom";

const spanStyle = {
  position: "relative",
  top: "-3px",
  color: "#5B246C",
  fontSize: "25.24px",
};

const iconCover = {
  position: "relative",
  top: "-0.6vh",
  justifySelf: "center",
  marginLeft: "2vh",
  borderRadius: "1vh",
  padding: "0.2vh",
  paddingLeft: "0.7vh",
  paddingRight: "0.7vh",
};

const priceTag = {
  fontSize: "25.24px",
  fontWeight: "700",
  marginBottom: "10px",
  marginLeft:'20px'
};
export default function OfferWidget() {
  return (
    <div
      container
      direction="row"
      style={{
        height: "180px",
        backgroundColor: "#5B246C1A",
        borderRadius: "5vh",
        border: "solid",
        borderColor: "purple",
        display: "flex",
        flexDirection: "row",
        margin: "40px 20px 30px 20px",
        padding: "10px",
      }}
    >
      <Grid item container direction="column" width="700px" scrolllable>
        <Grid
          item
          margin="10px"
          marginLeft="30px"
          style={{ fontSize: "20.19px" }}
        >
          <LocalFireDepartmentIcon /> Special Offer
        </Grid>
        <Grid container direction="row" marginLeft="20px">
          <Grid style={{ fontSize: "20.19px" }}>
            Dummy Lake, Hanumangarh(Raj)
          </Grid>
          <Grid backgroundColor="white" style={iconCover}>
            <FavoriteIcon style={{ color: "#D65F89" }} />{" "}
            <span
              style={{
                position: "relative",
                top: "-0.6vh",
                color: "#D65F89",
                fontSize: "15px",
              }}
            >
              93%
            </span>
          </Grid>
        </Grid>
        <Grid item container direction="rows" style={{ marginLeft: "1vh" }}>
          <Grid
            style={{
              padding: "10px 20px",

              backgroundColor: "white",
              margin: "1vh",
              borderRadius: "3vh",
              color: "#5B246C",
              fontWeight: "bold",
            }}
          >
            <PeopleAltIcon style={{ fontSize: "25.24px" }} />
            <span style={spanStyle}>2 Day's Trip</span>
          </Grid>
          <Grid
            style={{
              padding: "10px 20px",
              backgroundColor: "white",
              margin: "1vh",
              borderRadius: "3vh",
              color: "#5B246C",
              fontWeight: "bold",
            }}
          >
            <CalendarTodayIcon style={{ fontSize: "25.24px" }} />
            <span style={spanStyle}>3 Guests</span>
          </Grid>
        </Grid>
      </Grid>
      <Grid
        item
        container
        direction="column"
        style={{
          width: "100px",
          paddingTop: "15px",
          position: "relative",
          right: "100px",
        }}
      >
        <Typography style={priceTag}>Rs.3999</Typography>
        <Button
          variant="contained"
          style={{
            width: "180.44px",
            height: "64.35px",
            backgroundColor: "#5B246C",
            borderRadius: "18.93px",
            fontSize: "25.24px",
            lineHeight: "34.42px",
            fontWeight: "600",
          }}
        >
          Book Now
        </Button>
      </Grid>
    </div>
  );
}
