import * as React from "react";
import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import Amenities from "../componenets/amenities";
import History from "../componenets/history";
import AboutSpot from "../componenets/aboutSpot";
import SpotHeader from "../componenets/spotHeader";
import CustomerRatings from "../componenets/customerRatings";
import ReviewCard from "../componenets/reviewCard";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import PriceElement from "../componenets/priceElement";
import TotalPriceElement from "../componenets/priceTotal";
import Button from "@mui/material/Button";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import Footer from "../componenets/footer";

const ProceedButtonStyle = {
  fontWeight: "700",
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#5B246C",
  width: "100%",
  margin: "5% 5% 0% 6%",
  color: "white",
  borderRadius: "9px",
};

const ExploreButtonStyle = {
  fontWeight: "700",
  fontSize: "18px",
  padding: "10px",
  backgroundColor: "#fff",
  width: "100%",
  margin: "5% 5% 0% 6%",
  color: "#5B246C",
  borderRadius: "9px",
  border: "solid 2px",
  borderColor: "#5B246C",
};

export default function LocationDetailsPage() {
  const val = 30;
  return (
    <Grid>
      <LoggedInNavbar />
      <Grid container direction="column" width="95vw" margin="auto">
        <Grid item container direction="row" md={12}>
          <Grid item container direction="row" md={7} margin="1vw">
            <Typography variant="h3" fontFamily="sans-serif">
              <strong>Tyngam Masi,</strong>Cherrapunjee( Sohra )
            </Typography>
            <Typography
              variant="h5"
              fontFamily="sans-serif"
              marginLeft="1vh"
              marginTop="2vh"
            >
              <strong> 4.5 </strong>{" "}
              <Rating name="read-only" value={4.5} precision="0.5" readOnly />
            </Typography>
          </Grid>
          <Grid item md={4} textAlign="right" margin="1vw" marginTop="5 vh">
            <Link>View all {val} photos and videos</Link>
          </Grid>
        </Grid>
        <Grid item container direction="column">
          <Grid
            item
            md={12}
            xs={12}
            container
            direction="row"
            style={{ justifyContent: "center" }}
          >
            <Grid item md={5} xs={5} container direction="row">
              <img
                alt="image123"
                src={`${process.env.PUBLIC_URL}/images/nature5.png`}
                style={{
                  height: "100%",
                  width: "90%",
                  borderRadius: "15px",
                }}
              ></img>
            </Grid>
            <Grid
              item
              md={6}
              xs={6}
              container
              direction="row"
              
              style={{ justifyContent: "space-around" }}
            >
              {[0, 1, 2, 3].map(() => {
                return (
                  <img
                    alt="image123"
                    height="45%"
                    width="45%"
                    src={`${process.env.PUBLIC_URL}/images/nature5.png`}
                    style={{ margin: "auto" }}
                  ></img>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Grid item container direction="row">
          <Grid item md={8} margin="1vw">
            <SpotHeader />
            <Amenities />
            <History />
            <AboutSpot />
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
              style={{ margin: "5% 5% 20% 5%", width: "100%", height: "25px" }}
            >
              <Typography textAlign="center">View on Map</Typography>
            </Grid>
            <Grid
              item
              container
              direction="column"
              style={{
                height: "max-content",
                padding: "2vh",
                border: "solid",
                marginLeft: "1vw",
              }}
            >
              <PriceElement name="Something" price="100" />
              <PriceElement name="Something else" price="100" />
              <PriceElement name="extras" price="100" />
              <PriceElement name="Taxes" price="100" />
              <PriceElement name="Tip" price="100" />
              <TotalPriceElement name="Something" price="500" />
            </Grid>
            <Link
              to={{ pathname: "/hotels" }}
              style={{ textDecoration: "none", width: "100%" }}
            >
              <Button variant="contained" style={ProceedButtonStyle}>
                <Typography variant="h7" fontWeight="bolder">
                  Proceed
                </Typography>
              </Button>
            </Link>
            <Button variant="outlined" style={ExploreButtonStyle}>
              <Typography variant="h7" fontWeight="bolder">
                Explore other spots
              </Typography>
            </Button>
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
}
