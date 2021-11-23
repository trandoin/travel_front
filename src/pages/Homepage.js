import * as React from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { Button } from "@mui/material";
import ServiceWidget from "./serviceWidget";
import LovelyHotels from "./LovelyHotels";
import OfferWidget from "./OfferWidget";
import Simple2 from "./Carousel2";
import SearchBox from "../componenets/searchBox";
import Footer from "../componenets/footer";
import "../removeScroll.css";
import "./offerWidget.css";
import ViewCarousel from "./Carousel";

const tabStyle = { color: "#fff", fontSize: "20px", margin: "3px 20px" };

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

export default function Homepage() {
  const theme = useTheme();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box
      sx={{ bgcolor: "background.paper", width: "100vw" }}
      style={{ overflowX: "hidden" }}
    >
      <Grid
        container
        style={{
          height: "100vh",
          backgroundImage: `url("${process.env.PUBLIC_URL}/images/nature5.png")`,
          backgroundSize: "cover",
          overflowX: "hidden",
          width: "100vw",
        }}
      >
        <Grid item direction="column" width="100vw">
          <AppBar
            position="static"
            style={{
              background:
                " linear-gradient(80deg, rgba(0, 0, 0, 0.3) 100%, rgba(255, 255, 255, 0) 11%",
              paddingTop: "5px",
              height: "7vh",
            }}
          >
            <Grid container direction="row">
              <Grid item md={4.4}></Grid>
              <Grid md={5.6}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  indicatorColor="none"
                  textColor="secondary"
                  aria-label="full width tabs example"
                >
                  <Tab style={tabStyle} label="Home" {...a11yProps(0)} />
                  <Tab style={tabStyle} label="Packages" {...a11yProps(1)} />
                  <Tab style={tabStyle} label="My Trips" {...a11yProps(2)} />
                </Tabs>
              </Grid>
              <Grid md={1} style={{ marginTop: "1vh", color: "#fff" }}>
                <Button
                  variant="contained"
                  style={{
                    backgroundColor: "white",
                    color: "#5B246C",
                    width: "6vw",
                    borderRadius: "6px",
                  }}
                >
                  Sign Up
                </Button>
              </Grid>
              <Grid md={1} style={{ marginTop: "1vh", color: "#fff" }}>
                <Button
                  variant="outlined"
                  style={{
                    backgroundColor: "#5B246C",
                    color: "white",
                    width: "6vw",
                    borderColor: "#5B246C",
                    borderRadius: "6px",
                  }}
                >
                  Login
                </Button>
              </Grid>
            </Grid>
          </AppBar>
        </Grid>
        <SwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={value}
          onChangeIndex={handleChangeIndex}
          style={{
            position: "absolute",
            top: "10vh",
            left: "74px",
            color: "#fff",
          }}
        >
          <TabPanel value={value} index={0} dir={theme.direction}>
            <Grid sx={7} direction="row">
              <Typography variant="h1">
                Explore{" "}
                <span style={{ fontWeight: "bolder", color: "green" }}>
                  The Heaven
                </span>
              </Typography>
              <Typography variant="h1">on The Earth</Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={1} dir={theme.direction}>
            <Grid sx={7} direction="row">
              <Typography variant="h1">
                Explore{" "}
                <span style={{ fontWeight: "bolder", color: "green" }}>
                  The Heaven
                </span>
              </Typography>
              <Typography variant="h1">on The Earth</Typography>
            </Grid>
          </TabPanel>
          <TabPanel value={value} index={2} dir={theme.direction}>
            <Grid sx={7} direction="row">
              <Typography variant="h1">
                Explore{" "}
                <span style={{ fontWeight: "bolder", color: "green" }}>
                  The Heaven
                </span>
              </Typography>
              <Typography variant="h1">on The Earth</Typography>
            </Grid>
          </TabPanel>
        </SwipeableViews>
        <Grid
          style={{
            marginLeft: "28vw",
            width: "40%",
            position: "absolute",
            top: "40vh",
          }}
        >
          <SearchBox />
        </Grid>
        <Grid
          container
          direction="column"
          style={{ width: "98%", position: "absolute", top: "90vh" }}
        >
          <Grid item>
            <ServiceWidget />
          </Grid>
          <Grid
            item
            style={{
              width: "100vw",
              margin: "5vh 0vh",
            }}
          >
            <Grid width="70%" margin="20px auto" textAlign="center">
              <Typography variant="h3">LOREM IPSUM</Typography>
              <Typography variant="h4">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo.quae ab illo inventore veritatis et
                quasi architecto beatae vitae dicta sunt explicabo.
              </Typography>
            </Grid>
            <Grid>
              <img
                src={`${process.env.PUBLIC_URL}/images/ss1.jpeg`}
                width="100%"
              ></img>
            </Grid>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                overflowX: "auto",
                overflowY: "hidden",
                whiteSpace: "nowrap",
                scrollbarWidth: "0px",
                scrollbarColor: "transparent",
                WebkitOverflowScrolling: "touch",
                marginBottom: "20px",
              }}
            >
              <OfferWidget />
              <OfferWidget />
              <OfferWidget />
              <OfferWidget />
            </div>
            <Grid
              item
              container
              direction="column"
              style={{
                backgroundColor: "white",
                padding: "10px 0px",
              }}
            >
              <Grid item>
                <Typography
                  style={{
                    marginLeft: "50px",
                    fontSize: "40px",
                    fontWeight: "700",
                    marginTop: "10px",
                  }}
                >
                  Explore Meghalaya
                </Typography>
              </Grid>
              <Grid item width="100vw">
                <ViewCarousel />
              </Grid>
            </Grid>

            <Grid
              style={{
                width: "98vw",
              }}
            >
              <Typography
                style={{
                  marginLeft: "50px",
                  fontSize: "40px",
                  fontWeight: "700",
                  padding: "10px 0px",
                }}
              >
                Explore Meghalaya
              </Typography>
              <Grid item width="100vw">
                <ViewCarousel />
              </Grid>
            </Grid>

            <Grid
              style={{
                padding: "40px 10px",
                backgroundColor: "white",
              }}
            >
              <LovelyHotels />
            </Grid>
          </Grid>
          <Footer />
        </Grid>

        <Grid></Grid>
      </Grid>
    </Box>
  );
}
