import React, { useState } from "react";
import { Grid, Typography } from "@mui/material";
import SearchBar from "./searchBar";
import SearchIcon from "@mui/icons-material/Search";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import RemoveIcon from "@mui/icons-material/Remove";

const iconStyle = { border: "solid 2px purple", borderRadius: "50%" };
const numbersStyle = {
  position: "relative",
  top: "-0.7vh",
  fontSize: "20px",
  padding: "10px",
};

export default function SearchBox() {
  const [date, setDate] = useState("");
  const dates = ["21-3-21", "22-3-21", "23-3-21"];
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  return (
    <Grid
      container
      md={12}
      margin="1vw"
      border="solid"
      borderRadius="15px"
      direction="column"
      justifyContent="center"
      style={{ backgroundColor: "white", padding: "10px", borderWidth: "1px" }}
    >
      <Grid
        container
        direction="row"
        style={{ margin: "1vh", alignContent: "center" }}
      >
        <SearchBar />
        <Grid
          container
          direction="column"
          style={{
            margin: "auto",
            height: "6vh",
            width: "6vh",
            backgroundColor: "purple",
            borderRadius: "10px",
          }}
        >
          <SearchIcon
            style={{
              margin: "auto",
              height: "4vh",
              width: "4vh",
            }}
          />
        </Grid>
      </Grid>
      <Grid item container>
        <Grid item md={2.6} container direction="column" margin="0.3vw">
          <Typography style={{ textAlign: "center" }}>Check IN</Typography>
          <FormControl sx={{ minWidth: 30 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={date}
              onChange={handleDateChange}
              autoWidth
            >
              {dates.map((item, index) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid item md={2.6} container direction="column" margin="0.3vw">
          <Typography style={{ textAlign: "center" }}>Check OUT</Typography>
          <FormControl sx={{ minWidth: 30 }}>
            <Select
              labelId="demo-simple-select-autowidth-label"
              id="demo-simple-select-autowidth"
              value={date}
              onChange={handleDateChange}
              autoWidth
            >
              {dates.map((item, index) => {
                return <MenuItem value={item}>{item}</MenuItem>;
              })}
            </Select>
          </FormControl>
        </Grid>
        <Grid
          style={{
            height: "10vh",
            border: "solid",
            opacity: "0.2",
            borderWidth: "1px",
            marginLeft: "1vw",
          }}
        ></Grid>
        <Grid
          item
          md={2.2}
          container
          direction="column"
          textAlign="center"
          marginTop="1vh"
        >
          Guests
          <Grid
            item
            style={{
              position: "relative",
              top: "2vh",
              flexDirection: "flex-end",
            }}
          >
            <AddIcon style={iconStyle} />
            <span style={numbersStyle}>2</span>
            <RemoveIcon style={iconStyle} />
          </Grid>
        </Grid>

        <Grid
          item
          md={2.2}
          container
          direction="column"
          textAlign="center"
          marginTop="1vh"
        >
          Children
          <Grid
            item
            style={{
              position: "relative",
              top: "2vh",
              flexDirection: "flex-end",
            }}
          >
            <AddIcon style={iconStyle} />
            <span style={numbersStyle}>2</span>
            <RemoveIcon style={iconStyle} />
          </Grid>
        </Grid>
        <Grid item md={1.5} container>
          {" "}
          <Button
            variant="text"
            style={{
              margin: "auto",
              color: "rgba(91, 36, 108, 1)",
              border: "solid",
              borderWidth: "1px",
              width: "5vw",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
}
