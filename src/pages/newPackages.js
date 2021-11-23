import { ButtonBase, Grid, Typography } from "@mui/material";
import React from "react";
import { Rating } from "@mui/material";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import NewPackagesCard from "./newPackagesCard";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import CategoryIcon from "@mui/icons-material/Category";
import { CheckBox } from "@material-ui/icons";
import LoggedInNavbar from "../componenets/loggedInNavbar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Footer from "../componenets/footer";

export default function NewPackages() {
  return (
    <Grid container direction="column">
      <LoggedInNavbar />
      <Grid container direction="row">
        <Grid item md={0.5}></Grid>
        <Grid item md={2} container direction="column">
          <Button
            variant="contained"
            style={{
              backgroundColor: "rgba(91, 36, 108, 1)",
              color: "white",
              padding: "6px, 60px, 6px, 60px",
              height: "40px",
              width: "173px",
              margin: "20px",
              borderRadius: "6px ",
            }}
          >
            <Typography style={{ fontWeight: "700", fontSize: "18px" }}>
              Filter
            </Typography>
          </Button>
          <Grid item container direction="column">
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: "600",

                alignItems: "center",
              }}
            >
              <AttachMoneyIcon
                style={{ position: "relative", top: "4px", margin: "0px 10px" }}
              />
              Price (Rupee)
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  margin: "10px 10px 10px 40px",
                }}
              >
                Min
                <span
                  style={{
                    border: "solid 1px ",
                    padding: "3px 10px",
                    margin: "10px",
                  }}
                >
                  100
                </span>
              </Typography>
              <Typography
                style={{
                  fontWeight: "400",
                  fontSize: "18px",
                  margin: "10px 10px 10px 40px",
                }}
              >
                Max
                <span
                  style={{
                    border: "solid 1px ",
                    padding: "3px 10px",
                    margin: "10px",
                  }}
                >
                  1000
                </span>
              </Typography>
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: "600",
                alignItems: "center",
              }}
            >
              <CategoryIcon
                style={{ position: "relative", top: "4px", margin: "0px 10px" }}
              />
              Categories
              {[0, 1, 2, 3, 4].map(() => {
                return (
                  <Typography
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      marginLeft: "40px",
                    }}
                  >
                    <CheckBox
                      style={{
                        position: "relative",
                        top: "6px",
                        marginRight: "6px",
                      }}
                    />
                    Something
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
          <Grid item container direction="column">
            <Typography
              style={{
                fontSize: "24px",
                fontWeight: "600",
                alignItems: "center",
                marginTop:'10px',

              }}
            >
              <LocationOnIcon
                style={{ position: "relative", top: "4px", margin: "0px 10px" }}
              />
              Spots
              {[0, 1, 2, 3, 4].map(() => {
                return (
                  <Typography
                    style={{
                      fontWeight: "400",
                      fontSize: "18px",
                      marginLeft: "40px",
                    }}
                  >
                    Elephant Falls
                  </Typography>
                );
              })}
            </Typography>
          </Grid>
        </Grid>
        <Grid md={0.0001} style={{ width: "0px", border: "solid 1px" }}></Grid>
        <Grid item md={0.26}></Grid>

        <Grid item container direction="column" md={9}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={[]}
            sx={{ width: 300 }}
            renderInput={(params) => <TextField {...params} label="Shilong" />}
            style={{ width: "123px", margin: "10px 30px" }}
          />
          <Grid container direction="row" justifyContent="space-around">
            {[0, 1, 2, 3, 4, 5, 6, 7].map(() => {
              return <NewPackagesCard />;
            })}
          </Grid>
        </Grid>
      </Grid>
      <Footer/>
    </Grid>
  );
}
