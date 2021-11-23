import Typography from "@mui/material/Typography";
import { Grid } from "@mui/material";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";

const amenities = [
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
  "Safe drinking water and nothing more",
  "Public rest rooms",
  "Roads and sidewalks",
  "Connectivity",
];

const headerStyle = {
  fontWeight: "700",
  fontSize: "30px",
  textAlign: "left",
  marginLeft: "38px",
  marginTop: "10px",
};

const normalListItemFontStyle = {
  fontSize: "18px",
  fontWeight: "400",
  lineWeight: "24.55px",
  marginLeft: "82px",
};

export default function Amenities() {
  return (
    <Grid item container direction="column">
      <Grid item container direction="column">
        <Typography style={headerStyle}>Amenities</Typography>
      </Grid>
      <Grid item container direction="column">
        {amenities.map((amenity, index) => {
          return (
            <Grid item marginLeft="2vw">
              <Typography style={normalListItemFontStyle}>
                <TurnedInNotIcon style={{ position: "relative", top: "6px" }} />{" "}
                {amenity}
              </Typography>
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
}
