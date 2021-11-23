import React from "react";
import { Grid, Typography } from "@mui/material";
import WifiIcon from "@mui/icons-material/Wifi";
import Rating from "@mui/material/Rating";
import { Link } from "react-router-dom";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

function Image() {
  return (
    <img
      src={`${process.env.PUBLIC_URL}/images/hotel1.jpeg`}
      height="300px"
      width="92%"
      style={{ margin: "0.9vw", borderRadius: "10px" }}
      alt="hotel"
    ></img>
  );
}

const dummySite = {
  fontSize: "20px",
};

const styleDiv = {
  border: "solid",
  borderRadius: "0.5vh",
  borderWidth: "1px",
  padding: "5px",
  margin: "5px 10px",
  display: "flex",
  marginRight: "2vw",
  backgroundColor: "#fff",
};

function HotelCard(props) {
  // const item = props.item;
  const index = props.index;
  return (
    <Grid
      item
      container
      direction="column"
      md={2.7}
      paddingBottom="20px"
      marginTop="3vh"
      style={
        index % 2 === 0
          ? { backgroundColor: "whitesmoke", borderRadius: "20px" }
          : { backgroundColor: "whitesmoke", borderRadius: "20px" }
      }
    >
      <Grid item md={6}>
        <Link to={{ pathname: "/details" }}>
          <Image />
        </Link>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={7} style={{ textAlign: "left", marginLeft: "1vw" }}>
          <Typography variant="h5" fontWeight="bolder">
            Dummy Site
          </Typography>
        </Grid>
        <Grid item md={3} style={{ textAlign: "right", marginLeft: "3vh" }}>
          <Typography variant="h5" fontWeight="bolder">
            <FavoriteBorderIcon style={{ fontSize: "30px" }} />
          </Typography>
        </Grid>
      </Grid>
      <Grid>
        <Typography style={{ textAlign: "left", marginLeft: "1vw" }}>
          Sikar, Raj
        </Typography>
      </Grid>
      <Grid>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            marginLeft: "1vw",
          }}
        >
          <div style={styleDiv}>
            <WifiIcon style={{ marginLeft: "1vh" }} />
            <Typography marginLeft="10px" marginRight="10px">
              Wifi
            </Typography>
          </div>
          <div style={styleDiv}>
            <WifiIcon style={{ marginLeft: "1vh" }} />
            <Typography marginLeft="10px" marginRight="10px">
              Kitchen
            </Typography>
          </div>
          <div style={styleDiv}>
            <WifiIcon style={{ marginLeft: "1vh" }} />
            <Typography marginLeft="10px" marginRight="10px">
              Vaccinated Staff
            </Typography>
          </div>
        </div>
      </Grid>
      <Grid item container direction="row">
        <Grid item md={1}></Grid>
        <Grid
          item
          md={4}
          container
          direction="column"
          justifyContent="flex-start"
        >
          <Typography fontSize="20px">500 Reviews</Typography>
          <Rating name="read-only" value={4} readOnly />
        </Grid>
        <Grid item md={4}></Grid>

        <Grid
          item
          md={2}
          container
          direction="column"
          justifyContent="flex-start"
        >
          <Typography style={{ fontSize: "28px", fontWeight: "700" }}>
            3999
          </Typography>
        </Grid>
      </Grid>
      {/* <Grid style={{ margin: "1vw", marginBottom: "0vh" }}>
        <Typography
          variant="h5"
          fontWeight="bolder"
          style={{ position: "relative", textAlign: "right", top: "4vh" }}
        >
          Rs 3400/night
        </Typography>
        <Typography>500 reviews</Typography>
        <Rating name="read-only" value={4} readOnly />
      </Grid> */}
    </Grid>
  );
}
export default HotelCard;
