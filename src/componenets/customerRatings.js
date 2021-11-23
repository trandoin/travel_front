import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import { Rating } from "@mui/material";
import RatingIndicator from "./ratingIndicator";

const ratings = [
  {
    name: "Cleanliness",
    value: 4.1,
  },
  {
    name: "Communication",
    value: 3.1,
  },
  {
    name: "Location",
    value: 4.1,
  },
  {
    name: "Check-in",
    value: 4.1,
  },
  {
    name: "Value",
    value: 4.9,
  },
  {
    name: "Language",
    value: 4.6,
  },
];

const headerStyle = {
  fontWeight: "700",
  fontSize: "24px",
  textAlign: "left",
  marginLeft: "38px",
  marginTop: "10px",
  color: "#5B246C",
};

const reviewsLabelStyle = {
  fontWeight: "700",
  fontSize: "18.44px",
  textAlign: "left",
  marginLeft: "40px",
  marginTop: "10px",
};

export default function CustomerRatings() {
  return (
    <Grid item container>
      <Grid item container direction="column">
        <Typography style={headerStyle}>Customer Ratings</Typography>
        <Typography style={reviewsLabelStyle}>
          150 Reviews
          <strong style={{ marginLeft: "10vh" }}> 4.3 </strong>{" "}
          <Rating name="read-only" value={4.3} precision="0.1" readOnly />
        </Typography>
        <Grid item container direction="row" margin='40px'>
          {ratings.map((rating) => {
            return <RatingIndicator name={rating.name} value={rating.value} />;
          })}
        </Grid>
      </Grid>
    </Grid>
  );
}
