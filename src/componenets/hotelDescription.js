import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import { Link } from "react-router-dom";

export default function HotelDesciption() {
  return (
    <Grid item container direction="column" margin="1vw">
      <Grid>
        <Typography variant="h4" fontWeight="bold">
          Description
        </Typography>
      </Grid>
      <Grid item container direction="row" marginLeft="2vw">
        <Grid item>
          <Typography variant="h6">4 Guests </Typography>{" "}
        </Grid>
        <Grid item>
          <Typography variant="h6">. 2 Bedrooms </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">. 2 Bathrooms </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">. 1 Balcony </Typography>
        </Grid>
      </Grid>
      <Grid item container direction="column" marginLeft="2vw">
        <Grid item>
          <Typography variant="h6">
            <TurnedInNotIcon style={{ position: "relative", top: "6px" }} />
            Pets Allowed
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <TurnedInNotIcon style={{ position: "relative", top: "6px" }} />
            Car parking
          </Typography>
        </Grid>
        <Grid item>
          <Typography variant="h6">
            <TurnedInNotIcon style={{ position: "relative", top: "6px" }} />
            Something Else
          </Typography>
        </Grid>
      </Grid>
      <Grid md={8} margin='1vh 0'>
        <Typography variant="h6">
          We have various rooms to suit your requirements for a short or a long
          stay correspondingly. Some rooms have balcony , others are spacious
          for you to spend months together coupled with inroom kitchenette. With
          24/7 Security , CCTV cameras ....
        </Typography>
        <Link>Show more</Link>
      </Grid>
    </Grid>
  );
}
