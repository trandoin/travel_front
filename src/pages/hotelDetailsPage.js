import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid, Button } from "@mui/material";
import { Link } from "react-router-dom";
import CustomerRatings from "../componenets/customerRatings";
import ReviewCard from "../componenets/reviewCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PriceElement from "../componenets/priceElement";
import TotalPriceElement from "../componenets/priceTotal";
import HotelDesciption from "../componenets/hotelDescription";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import Footer from "../componenets/footer";

const ProceedButtonStyle = {
  fontWeight: "700",
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#5B246C",
  width: "100%",
  margin: "5% 5% 0% 0%",
  color: "white",
  borderRadius: "9px",
};

export default function HotelDetailsPage() {
  const val = 30;
  return (
    <Grid container direction="column">
      <LoggedInNavbar />
      <Grid item container direction="row" md={12}>
        <Grid item container direction="row" md={7} margin="1vw">
          <Typography variant="h4" fontFamily="sans-serif" fontWeight="bold">
            Cozy, Charming & Hygienic Rooms with all amenities
          </Typography>
        </Grid>
        <Grid item md={4} textAlign="right" margin="1vw" marginTop="5 vh">
          <Link>View all {val} photos and videos</Link>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={3.8} style={{ margin: "10px" }}>
          <img
            alt="hotel1"
            src={`${process.env.PUBLIC_URL}/images/hotel1.png`}
            width="100%"
          ></img>
        </Grid>
        <Grid item md={3.8} style={{ margin: "10px" }}>
          <img
            alt="hotel1"
            src={`${process.env.PUBLIC_URL}/images/hotel1.png`}
            width="100%"
          ></img>
        </Grid>
        <Grid item md={3.8} style={{ margin: "10px" }}>
          <img
            alt="hotel1"
            src={`${process.env.PUBLIC_URL}/images/hotel1.png`}
            width="100%"
          ></img>
        </Grid>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={8} margin="1vw">
          <HotelDesciption />
          <CustomerRatings />
          <Grid item container direction="row">
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <ReviewCard />
            <Link style={{ margin: "1vh 5vh" }}>
              <Typography>
                See All 150 Reviews{" "}
                <ArrowRightAltIcon
                  style={{ position: "relative", top: "0.5vh" }}
                />{" "}
              </Typography>
            </Link>
          </Grid>
        </Grid>
        <Grid md={1}></Grid>
        <Grid item md={2} container direction="column">
          <Grid
            item
            container
            direction="column"
            style={{ height: "max-content", padding: "2vh", border: "solid" }}
          >
            <PriceElement name="Something" price="100" />
            <PriceElement name="Something else" price="100" />
            <PriceElement name="extras" price="100" />
            <PriceElement name="Taxes" price="100" />
            <PriceElement name="Tip" price="100" />
            <TotalPriceElement name="Something" price="500" />
          </Grid>
          <Link
            to={{ pathname: "/check1" }}
            style={{ textDecoration: "none", width: "100%" }}
          >
            <Button variant="contained" style={ProceedButtonStyle}>
              <Typography variant="h7" fontWeight="bolder">
                Proceed
              </Typography>
            </Button>
          </Link>
        </Grid>
      </Grid>
      <Footer />
    </Grid>
  );
}
