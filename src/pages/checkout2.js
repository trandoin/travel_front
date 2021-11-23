import { Typography } from "@mui/material";
import React, { useState } from "react";
import { MultiSelect } from "react-multi-select-component";
import Button from "@mui/material/Button";

import { Grid } from "@mui/material";
import "../font.css";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import { borderRadius } from "@mui/system";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import MenuIcon from "@mui/icons-material/Menu";
import ClearIcon from "@mui/icons-material/Clear";
import GoogleMap from "./GoogleMap";
import Footer from "../componenets/footer";

const options = [
  { label: "Grapes 🍇", value: "grapes" },
  { label: "Mango 🥭", value: "mango" },
  { label: "Strawberry 🍓", value: "strawberry", disabled: true },
];

const CheckOut2 = () => {
  const [cab, setCab] = useState(false);
  const [guide, setGuide] = useState(false);
  return (
    <>
      <LoggedInNavbar />
      <Grid container direction="column" margin="2vw">
        <Grid item container direction="row">
          <Typography variant="h4" fontWeight="bold">
            One more step befor you proceed for payment
          </Typography>
        </Grid>
        <Grid container direction="row">
          <Grid item container direction="column">
            <Typography variant="h6">
              Book services with <strong>20%</strong> discount
            </Typography>
            <Grid item container direction="row" padding="10px">
              <Grid
                item
                style={{
                  border: "solid",
                  borderWidth: "2px",
                  borderRadius: "5px",
                  margin: "auto 0",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/service1.png`}
                  height="100px"
                  style={{ padding: "10px" }}
                ></img>
              </Grid>
              <Grid
                item
                md={2}
                container
                direction="column"
                justifyContent="center"
                style={{ marginLeft: "5vh" }}
              >
                <Typography variant="h5" fontWeight="bolder">
                  {cab ? (
                    <CheckBoxIcon
                      onClick={() => {
                        setCab(!cab);
                      }}
                      style={{ position: "relative", top: "5px" }}
                    />
                  ) : (
                    <CheckBoxOutlineBlankIcon
                      onClick={() => {
                        setCab(!cab);
                      }}
                      style={{ position: "relative", top: "5px" }}
                    />
                  )}
                  Book Tourist Cab{" "}
                </Typography>
                <Typography>
                  The total distance between your selected spots in Shilong is
                  around 14kms.
                </Typography>
                {!cab
                  ? ""
                  : [1, 2, 3, 4, 5].map((item) => {
                      return (
                        <Grid
                          item
                          container
                          direction="row"
                          style={{
                            width: "486px",
                            height: "39px",
                            justifyContent: "space-between",
                            marginTop: "3px",
                          }}
                        >
                          <Grid
                            item
                            style={{
                              width: "30px",
                              height: "30px",
                              border: "solid",
                              borderRadius: "50%",
                              borderWidth: "1px  ",

                              textAlign: "center",
                              fontSize: "11px",
                              alignSelf: "center",
                              paddingTop: "5px",
                            }}
                          >
                            {" "}
                            {item}
                          </Grid>

                          <Grid
                            item
                            container
                            direction="row"
                            style={{
                              height: "100%",
                              border: "solid",
                              width: "373px",
                              justifyContent: "space-between",
                              borderRadius: "5px",
                              borderWidth: "1px  ",
                              alignItems: "center",
                            }}
                          >
                            <Grid item md={8} container direction="row">
                              <MenuIcon
                                fontSize="20px"
                                style={{ margin: "5px" }}
                              />
                              <Typography
                                fontSize="20px"
                                fontWeight="500"
                                margin="0 0 0 10px"
                              >
                                Destination {item}
                              </Typography>
                            </Grid>
                            <Grid item textAlign="center">
                              <Typography>
                                <ClearIcon
                                  fontSize="20px"
                                  style={{ margin: "5px" }}
                                />
                              </Typography>
                            </Grid>
                          </Grid>
                          <Grid>
                            <Typography
                              style={{ fontSize: "20px", fontWeight: "600" }}
                            >
                              Rs 151
                            </Typography>
                          </Grid>
                        </Grid>
                      );
                    })}
                <Grid>
                  {cab ? (
                    <Typography
                      style={{
                        fontWeight: "700",
                        fontSize: "24px",
                        color: "#5B246C",
                        fontFamily: "Nunito",
                        textAlign: "right",
                      }}
                    >
                      Total: Rs 380
                    </Typography>
                  ) : (
                    ""
                  )}
                </Grid>
              </Grid>
              <Grid item md={3}></Grid>
              <Grid item md={4} style={{ padding: "10px" }} height="400px">
                <GoogleMap width="45%" height="65%" />
                {/* <img
                  src={`${process.env.PUBLIC_URL}/images/service1.png`}
                  height="100px"
                  style={{ padding: "10px" }}
                  height="400px"
                ></img> */}
              </Grid>
            </Grid>
            <Grid item container direction="row" padding="10px">
              <Grid
                item
                style={{
                  border: "solid",
                  borderWidth: "2px",
                  borderRadius: "5px",
                }}
              >
                <img
                  src={`${process.env.PUBLIC_URL}/images/service1.png`}
                  height="100px"
                  style={{ padding: "10px" }}
                ></img>
              </Grid>
              <Grid
                item
                md={6}
                container
                direction="column"
                justifyContent="center"
                style={{ marginLeft: "5vh" }}
              >
                <Typography variant="h5" fontWeight="bolder">
                  {guide ? (
                    <CheckBoxIcon
                      onClick={() => {
                        setGuide(!guide);
                      }}
                      style={{ position: "relative", top: "5px" }}
                    />
                  ) : (
                    <CheckBoxOutlineBlankIcon
                      onClick={() => {
                        setGuide(!guide);
                      }}
                      style={{ position: "relative", top: "5px" }}
                    />
                  )}
                  Book a Tour Guide{" "}
                </Typography>
                <Typography>
                  Tourist Guide in Shilong <strong>500Rs</strong>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid style={{position:'relative', top:'20px'}}>
        <Footer />
      </Grid>
    </>
  );
};

export default CheckOut2;
