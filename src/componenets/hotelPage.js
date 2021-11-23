import React from "react";
import { Grid, Typography } from "@mui/material";
import HotelContainer from "./hotelsContainer";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import LoggedInNavbar from "./loggedInNavbar";
import Footer from "./footer";

export default function HotelPage() {
  const [age, setAge] = React.useState("");
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const [dateRange, setDateRange] = React.useState("");
  const handleDateRangeChange = (event) => {
    setDateRange(event.target.value);
  };
  const [guest, setGuests] = React.useState("");
  const handleGuestChange = (event) => {
    setGuests(event.target.value);
  };

  const dateRanges = ["None", "15 Mar 21 - 18 Mar 21", "16 Mar 21 - 17 Mar 21"];
  const guests = ["1", "2", "3", "4", "5", "6", "7"];
  return (
    <Grid container direction="column" width="100vw">
      <Grid >
        <LoggedInNavbar />
      </Grid>
      <Grid container direction="column" md={11.7} margin="auto">
        <Grid item container direction="row">
          <Typography variant="h3">
            Search resealts for <strong>Kornamgla</strong>
          </Typography>
        </Grid>
        <Grid container direction="row" marginLeft="1vw"> 
          <Grid md={2}>
            <FormControl sx={{ m: 3, minWidth: 100, minHeight:40 }}>
              <InputLabel id="demo-simple-select-autowidth-label">
                Filter
              </InputLabel>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={age}
                onChange={handleAgeChange}
                autoWidth
                label="Age"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={10}>Twenty</MenuItem>
                <MenuItem value={21}>Twenty one</MenuItem>
                <MenuItem value={22}>Twenty one and a half</MenuItem>
              </Select>
            </FormControl>
          </Grid>
          <Grid md={7}></Grid>
          <Grid md={3}>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={dateRange}
                onChange={handleDateRangeChange}
                autoWidth
              >
                {dateRanges.map((item, index) => {
                  return <MenuItem value={item}>{item}</MenuItem>;
                })}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
              <Select
                labelId="demo-simple-select-autowidth-label"
                id="demo-simple-select-autowidth"
                value={guest}
                onChange={handleGuestChange}
                autoWidth
              >
                {guests.map((item, index) => {
                  return <MenuItem value={`${item}`}>{item} Guests</MenuItem>;
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid padding="1vh">
          <HotelContainer />
        </Grid>
      </Grid>
      <Grid width='100vw' margin="auto">
        <Footer />
      </Grid>
    </Grid>
  );
}
