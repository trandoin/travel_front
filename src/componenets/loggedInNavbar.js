import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import SearchBar from "material-ui-search-bar";
import { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import SortIcon from "@mui/icons-material/Sort";
import { Link } from "react-router-dom";

const footerItems = [
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
];

const style = {
  opacity: "60%",
};

const navItems = ["Home", "Packages", "My Trips"];

export default function LoggedInNavbar() {
  const [curState, setCurState] = useState(0);
  return (
    <Grid
      item
      md={12}
      container
      direction="row"
      margin="auto"
      padding="20px"
      style={{
        alignItems: "center",
      }}
    >
      <Grid md={2}>
        <Link to={{ pathname: "/" }}>
          <img
            alt="logo"
            src={`${process.env.PUBLIC_URL}/images/logo.jpeg`}
            width="80px"
            padding="10px"
          ></img>
        </Link>
      </Grid>
      <Grid md={0.5}></Grid>
      <Grid md={2.5}>
        <SearchBar
          value={""}
          onChange={(newValue) => console.log(newValue)}
          onRequestSearch={(event) => console.log(event.target.value)}
          style={{ border: "solid", borderWidth: "0.5px", borderRadius: "1vh" }}
        />
      </Grid>
      <Grid md={0.4}></Grid>
      {navItems.map((item, index) => {
        return (
          <Grid md={0.9} textAlign="center">
            <Typography
              style={
                index === curState
                  ? {
                      fontWeight: "bold",
                      color: "purple",
                      borderBottom: "solid",
                      margin: "5px 30px",
                    }
                  : { fontWeight: "bold", opacity: " 60%" }
              }
              onClick={() => setCurState(index)}
            >
              {item}
            </Typography>
          </Grid>
        );
      })}
      <Grid md={3}></Grid>
      <Link to={{ pathname: "/profile" }}>
        <Grid
          style={{
            padding: "0.2vh 1vh",
            border: "solid",
            borderRadius: "30px",
            borderWidth: "2px",
            borderColor: "#dadada",
            color: "#5B246C",
            fontWeight: "bold",
            textAlign: "right",
          }}
        >
          <PermIdentityIcon fontWeight="bold" />
          <SortIcon />
        </Grid>
      </Link>
    </Grid>
  );
}
